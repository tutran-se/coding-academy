import React from "react";
import { Badge, Box, Stack } from "@chakra-ui/layout";
import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@chakra-ui/button";

const CourseItem = ({ course }) => {
  const { name, slug, summary, image, price, totalLessons, totalDurations } =
    course;

  return (
    <Box
      maxW={["full", "full", "45%", "32%"]}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      m="1.5"
      borderWidth="thin"
    >
      <Link href={`/courses/${slug}`}>
        <a>
          <NextImage src={image.url} alt={"title"} width="786" height="443" />
        </a>
      </Link>

      <Box p="6">
        <Box d="flex" alignItems="center">
          <Stack>
            <Badge
              borderRadius="base"
              px="2"
              colorScheme="red"
              textDecor="line-through"
            >
              Price: ${price}
            </Badge>
            <Badge borderRadius="base" px="2" colorScheme="green">
              Price: ${price}
            </Badge>
          </Stack>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {totalLessons} lessons &bull; {totalDurations}h
          </Box>
        </Box>

        <Box mt="1" fontWeight="bold" lineHeight="tight" fontSize="lg">
          <Link href={`/courses/${slug}`}>
            <a>{name}</a>
          </Link>
        </Box>
        <Box color="gray.400">{summary.slice(0, 199)}</Box>
        <Box mt="3">
          <Link href={`/courses/${slug}`}>
            <a>
              <Button colorScheme="orange">🔥 View Details</Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseItem;
