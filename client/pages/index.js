import React from "react";
import CourseItem from "../components/CourseItem";
import { Flex } from "@chakra-ui/layout";
import client from "../libs/apolloClient";
import { ALL_COURSES_QUERY } from "../constants/queryGrapql";
import { Box } from "@chakra-ui/react";

const Homepage = ({ courses }) => {
  return (
    <Box minH="82vh">
      <Flex>
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getStaticProps(context) {
  const {
    data: { courses },
  } = await client.query({
    query: ALL_COURSES_QUERY,
  });

  return {
    props: { courses }, // will be passed to the page component as props
  };
}

export default Homepage;
