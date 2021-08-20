import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/layout";
import { Breadcrumb } from "@chakra-ui/breadcrumb";
import { BreadcrumbItem } from "@chakra-ui/breadcrumb";
import { BreadcrumbLink } from "@chakra-ui/breadcrumb";
import ReactHtmlParser from "react-html-parser";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Center, useColorMode } from "@chakra-ui/react";
import ChapterItem from "./ChapterItem";

const CourseDetail = ({ course }) => {
  const {
    name,
    video,
    summary,
    price,
    chapters,
    totalLessons,
    totalDurations,
    slug,
  } = course;
  const { colorMode } = useColorMode();
  const breadcrumbColor = colorMode === "light" ? "orange.500" : "orange.400";
  return (
    <>
      <Stack spacing="4" mt="4">
        <Breadcrumb
          spacing="0.5"
          separator={<ChevronRightIcon color="gray.500" />}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/" as={Link}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage textTransform="capitalize">
            <BreadcrumbLink href="#" color={breadcrumbColor}>
              {slug}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Center textAlign="center">
          <Heading fontSize={{ base: "20px", md: "25px", lg: "35px" }}>
            {name}
          </Heading>
        </Center>
        <Box>
          <AspectRatio ratio={16 / 9} maxW="100%">
            <>{ReactHtmlParser(video)}</>
          </AspectRatio>
        </Box>

        <Box>
          <Heading fontSize={{ base: "18px", md: "18px", lg: "20px" }}>
            ⚡ Summary:{" "}
          </Heading>
          <Text lineHeight="taller">{summary}</Text>
        </Box>

        <Box>
          <Heading fontSize={{ base: "18px", md: "18px", lg: "20px" }}>
            💰 Price:{" "}
            <Badge borderRadius="base" p="2" fontSize="md" colorScheme="green">
              ${price}
            </Badge>
          </Heading>
        </Box>
        <Stack>
          <Flex alignItems="baseline">
            <Heading fontSize={{ base: "18px", md: "18px", lg: "20px" }}>
              📝 Course Curriculum:
            </Heading>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
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

export default CourseDetail;
