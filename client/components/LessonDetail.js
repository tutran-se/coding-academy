import React from "react";
import { Box, Flex, Heading, Stack, AspectRatio } from "@chakra-ui/layout";
import { Breadcrumb } from "@chakra-ui/breadcrumb";
import { BreadcrumbItem } from "@chakra-ui/breadcrumb";
import { BreadcrumbLink } from "@chakra-ui/breadcrumb";
import ReactHtmlParser from "react-html-parser";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Button, Center, Tooltip, useColorMode } from "@chakra-ui/react";
import ChapterItem from "./ChapterItem";

const LessonDetail = ({ course, lesson }) => {
  const { chapters, totalLessons, totalDurations, slug: courseSlug } = course;
  const lessonsArray = chapters.map((chapter) => chapter.lessons);
  let lessons = [];
  lessonsArray.forEach((e) => (lessons = [...lessons, ...e]));
  const { slug: lessonSlug, video, name } = lesson;
  const { colorMode } = useColorMode();
  const breadcrumbColor = colorMode === "light" ? "orange.500" : "orange.300";

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === lessonSlug
  );
  return (
    <>
      <Stack spacing="4" mt="4">
        <Breadcrumb
          spacing="0.5"
          separator={<ChevronRightIcon color="gray.500" />}
          fontSize="sm"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/" as={Link}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage textTransform="capitalize">
            <BreadcrumbLink href={`/courses/${courseSlug}`} as={Link}>
              {courseSlug}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage textTransform="capitalize">
            <BreadcrumbLink href="#" color={breadcrumbColor}>
              {lessonSlug}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Center textAlign="center">
          <Heading size="xl">{name}</Heading>
        </Center>
        <Box>
          <AspectRatio ratio={16 / 9} maxW="100%">
            <>{ReactHtmlParser(video)}</>
          </AspectRatio>
        </Box>

        <Flex justify="space-between" mt={3}>
          {currentIndex <= 0 || currentIndex > lessons.length ? (
            <Tooltip hasArrow label="" placement="top">
              <Button w="30" isDisabled>
                👈 Previous
              </Button>
            </Tooltip>
          ) : (
            <Link
              href={`/courses/${courseSlug}/${lessons[currentIndex - 1].slug}`}
            >
              <a>
                <Tooltip
                  hasArrow
                  label={lessons[currentIndex - 1].name}
                  placement="top"
                >
                  <Button w="30">👈 Previous</Button>
                </Tooltip>
              </a>
            </Link>
          )}
          {currentIndex + 1 === lessons.length ? (
            <Tooltip hasArrow label="" placement="top">
              <Button w="30" isDisabled>
                Next 👉
              </Button>
            </Tooltip>
          ) : (
            <Link
              href={`/courses/${courseSlug}/${lessons[currentIndex + 1].slug}`}
            >
              <a>
                <Tooltip
                  hasArrow
                  label={lessons[currentIndex + 1].name}
                  placement="top"
                >
                  <Button w="30">Next 👉</Button>
                </Tooltip>
              </a>
            </Link>
          )}
        </Flex>
        <Stack>
          <Flex alignItems="baseline">
            <Heading size="md">📝 Course Curriculum:</Heading>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="md"
              ml="2"
            >
              {totalLessons} chapters &bull; {totalDurations}h
            </Box>
          </Flex>
          {chapters.map((chapter) => (
            <ChapterItem chapter={chapter} key={chapter.id} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default LessonDetail;
