import React from "react";
import { Heading, Stack } from "@chakra-ui/layout";
import LessonItem from "./LessonItem";
import { useColorMode } from "@chakra-ui/react";

const ChapterItem = ({ chapter }) => {
  const { name, lessons } = chapter;
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.300" : "gray.600";
  return (
    <Stack spacing="0.5">
      <Heading size="sm" p="3" py={4} bg={bg} borderRadius="sm">
        {name}
      </Heading>

      <Stack spacing="0.5">
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ChapterItem;
