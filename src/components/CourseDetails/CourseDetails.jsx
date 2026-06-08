// Styles
import './CourseDetails.scss';

export const CourseDetails = ({
  duration,
  level,
  instructor,
}) => (
  <div className="CourseDetails">
    <div className="CourseDetails__Info">
      <span className="CourseDetails__InfoItem">
        {duration}
      </span>

      <span className="CourseDetails__InfoItem">
        {level}
      </span>
    </div>

    <p className="CourseDetails__Instructor">
      By {instructor}
    </p>
  </div>
);
