import React from "react";
import CourseDetail from "../../../components/CourseDetail";
import {
  ALL_COURSES_QUERY,
  COURSE_DETAIL,
} from "../../../constants/queryGrapql";
import client from "../../../libs/apolloClient";

const CourseDetailPage = ({ course }) => {
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
    props: { course: courses[0] },
    revalidate: 1,
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
    fallback: "blocking",
  };
}

export default CourseDetailPage;
