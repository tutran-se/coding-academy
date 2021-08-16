import { gql } from "@apollo/client";

export const ALL_COURSES_QUERY = gql`
  query allCourses {
    courses {
      id
      name
      slug
      summary
      price
      totalLessons
      totalDurations
      image {
        url
        formats
      }
    }
  }
`;

export const COURSE_DETAIL = (courseSlug) => {
  const query = gql`
    query courseDetail {
        courses (where:{slug:"${courseSlug}"}){
            id
            name
            slug
            summary
            price
            video
            totalLessons
            totalDurations
            chapters{
              name
              id
              lessons{
                name
                slug
                  id
                duration
                isPreview
              }
            }
        }
      }
    `;
  return query;
};
