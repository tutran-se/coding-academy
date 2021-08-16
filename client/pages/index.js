import React from "react";
import CourseItem from "../components/CourseItem";
import { Flex } from "@chakra-ui/layout";
const Homepage = ({ result: courses }) => {
  console.log(courses);
  return (
    <Flex>
      {courses.map((course) => (
        <CourseItem course={course} key={course.id} />
      ))}
    </Flex>
  );
};

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/courses`);
  const result = await response.json();

  return {
    props: { result }, // will be passed to the page component as props
  };
}

export default Homepage;
