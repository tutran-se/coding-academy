import React from "react";
import { Heading, Stack } from "@chakra-ui/layout";
import LessonItem from "./LessonItem";
import { useColorMode } from "@chakra-ui/react";

const ChapterItem = ({ chapter }) => {
  const { name, lessons } = chapter;
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.300" : "gray.700";
  return (
    <Stack spacing="1">
      <Heading
        size="sm"
        p="3"
        py={4}
        bg={bg}
        borderRadius="sm"
        textTransform="uppercase"
      >
        {name}
      </Heading>

      <Stack spacing="1">
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ChapterItem;
