import { convertToUrlText } from '../../utils/convertToUrlText';

// Styles
import './CourseOverview.scss';

//Components
import { ButtonLink } from '../ButtonLink';

export const CourseOverview = ({ name, description }) => (
  <div className="CourseOverview">
    <div className="CourseOverview__Text">
      <h3 className="CourseOverview__Title">
        {name}
      </h3>

      <p>{description}</p>
    </div>

    <ButtonLink
      to={`/courses/${convertToUrlText(name)}`}
      text="View Course"
      color="smoke"
    />
  </div>
);
