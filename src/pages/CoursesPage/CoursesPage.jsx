import data from '../../data/data.json';

// Styles
import './CoursesPage.scss';

// Components
import { PageOverview } from '../../components/PageOverview';
import { Course } from '../../components/Course';

export const CoursesPage = ({ className }) => {
  const { courses } = data;

  return (
    <main className={className + " CoursesPage"}>
      <PageOverview 
        title="Online Courses on Design and Development"
        text="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />

      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </main>
  );
};
