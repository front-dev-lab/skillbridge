import data from '../../data/data.json';

// Styles
import './CoursesSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { CoursesList } from '../CoursesList';

export const CoursesSection = ({ className }) => {
  const { courses } = data;

  return (
    <section id="our-courses" className={className + " CoursesSection"}>
      <Container>
        <div className="CoursesSection__Content">
          <SectionOverview
            title="Our Courses"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            to="courses"
          /> 

          <CoursesList courses={courses} />
        </div>
      </Container>
    </section>
  );
};
