import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaVideo } from "react-icons/fa";
const LessonItem = ({ lesson }) => {
  const { name, slug, duration, isPreview } = lesson;
  const router = useRouter();
  const { courseSlug, lessonSlug } = router.query;
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.200" : "gray.800";
  const bgHover = colorMode === "light" ? "gray.300" : "gray.700";
  const isWatching = lessonSlug === slug;
  return (
    <Link href={`/courses/${courseSlug}/${slug}`}>
      <a>
        <Flex
          px={3}
          py={4}
          bg={bg}
          justifyContent="space-between"
          alignItems="center"
          borderRadius="sm"
          _hover={{
            background: bgHover,
          }}
          transition="0.6s"
          border={isWatching && "2px dashed orange"}
        >
          <Flex
            alignItems="center"
            fontSize={{ base: "15px", md: "15px", lg: "16px" }}
          >
            {isWatching ? "🔥" : <FaVideo />}{" "}
            <span style={{ marginLeft: "1rem" }}>
              {name} {isWatching && "(Watching...)"}
            </span>
          </Flex>
          <Flex alignItems="center">
            {isPreview && (
              <Button colorScheme="green" size="xs" mr="2">
                Preview
              </Button>
            )}
            <Button colorScheme="orange" size="xs" mr="2">
              {duration}
            </Button>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
};

export default LessonItem;
