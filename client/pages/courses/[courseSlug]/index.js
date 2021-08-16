import React from "react";
import CourseDetail from "../../../components/CourseDetail";
import {
  ALL_COURSES_QUERY,
  COURSE_DETAIL,
} from "../../../constants/queryGrapql";
import client from "../../../libs/apolloClient";

const CourseDetailPage = ({ course }) => {
  console.log(course);
  return (
    <>
      <CourseDetail course={course} />
    </>
  );
};
export async function getStaticProps(context) {
  const { courseSlug } = context.params;
  const {
    data: { courses },
  } = await client.query({
    query: COURSE_DETAIL(courseSlug),
  });

  return {
    props: { course: courses[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const {
    data: { courses },
  } = await client.query({
    query: ALL_COURSES_QUERY,
  });
  const paths = courses.map((e) => {
    return {
      params: {
        courseSlug: e.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking", // See the "fallback" section below
  };
}

export default CourseDetailPage;
