import React from "react";
import LessonDetail from "../../../components/LessonDetail";
import { ALL_LESSONS, LESSON_DETAIL } from "../../../constants/queryGrapql";
import client from "../../../libs/apolloClient";

const LessonDetailPage = ({ course, lesson }) => {
  // console.log(lesson, course);
  return (
    <>
      <LessonDetail lesson={lesson} course={course} />
    </>
  );
};

export async function getStaticProps(context) {
  const { lessonSlug, courseSlug } = context.params;
  const {
    data: { courses, lessons },
  } = await client.query({
    query: LESSON_DETAIL(lessonSlug, courseSlug),
  });

  return {
    props: { course: courses[0], lesson: lessons[0] },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const {
    data: { lessons },
  } = await client.query({
    query: ALL_LESSONS,
  });
  const paths = lessons.map((e) => {
    return {
      params: {
        lessonSlug: e.slug,
        courseSlug: e.course.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export default LessonDetailPage;
