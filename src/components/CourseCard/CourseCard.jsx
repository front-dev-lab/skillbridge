// Styles
import './CourseCard.scss';

// Components
import { ButtonLink } from '../ButtonLink';
import { CourseDetails } from '../CourseDetails';

const BASE_URL = import.meta.env.BASE_URL;

export const CourseCard = ({
  imageUrl,
  duration,
  level,
  instructor,
  name,
  description,
}) => (
  <div className="CourseCard">
    <img src={BASE_URL + imageUrl.slice(1)} className="CourseCard__Image" />

    <CourseDetails
      duration={duration}
      level={level}
      instructor={instructor}
    />

    <article className="CourseCard__Article">
      <h3 className="CourseCard__Title">
        {name}
      </h3>

      <p>
        {description}
      </p>
    </article>

    <ButtonLink
      to="pricing"
      text="Get It Now"
      color="grey"
      width="wide"
    />
  </div>
);
