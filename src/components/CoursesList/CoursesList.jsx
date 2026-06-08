// Styles
import './CoursesList.scss';

// Components
import { CourseCard } from '../CourseCard';

export const CoursesList = ({ courses }) => (
  <ul className="CoursesList">
    {courses.map(({
      id,
      images,
      duration,
      level,
      instructor,
      name,
      description,
    }) => (
      <li key={id}>
        <CourseCard
          imageUrl={images[0]}
          duration={duration}
          level={level}
          instructor={instructor}
          name={name}
          description={description}
        />
      </li>
    ))}
  </ul>
);
