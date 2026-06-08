// Styles
import './CourseArticle.scss';

// Components
import { CourseOverview } from '../CourseOverview';
import { CourseDetails } from '../CourseDetails';

const BASE_URL = import.meta.env.BASE_URL;

export const CourseArticle = ({
  name,
  description,
  images,
  duration,
  level,
  instructor,
}) => {
  return (
    <article className="CourseArticle">
      <CourseOverview
        name={name}
        description={description}
      />

      <ul className="CourseArticle__Images">
        {images.map(image => (
          <li key={image}>
            <img
              src={BASE_URL + image.slice(1)}
              className="CourseArticle__Image"
            />
          </li>
        ))}
      </ul>

      <CourseDetails
        duration={duration}
        level={level}
        instructor={instructor}
      />
    </article>
  );
};
