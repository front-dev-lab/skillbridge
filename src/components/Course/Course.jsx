// Styles
import './Course.scss';

// Components
import { Container } from '../Container';
import { CourseArticle } from '../CourseArticle';
import { Curriculum } from '../Curriculum';

export const Course = ({ course }) => {
  const {
    name,
    description,
    images,
    duration,
    level,
    instructor,
    curriculum,
  } = course;

  return (
    <section className="Course">
      <Container>
        <div className="Course__Content">
          <CourseArticle
            name={name}
            description={description}
            images={images}
            duration={duration}
            level={level}
            instructor={instructor}
          />

          <Curriculum curriculum={curriculum} />
        </div>
      </Container>
    </section>
  );
};
