// Styles
import './CurriculumList.scss';

// Components
import { LessonsBlock} from '../LessonsBlock';

export const CurriculumList = ({ curriculum, videoRef }) => (
  <ul className="CurriculumList">
    {curriculum.map(curriculumItem => (
      <li key={curriculumItem.id}>
        <LessonsBlock curriculumItem={curriculumItem} videoRef={videoRef} />
      </li>
    ))}
  </ul>
);
