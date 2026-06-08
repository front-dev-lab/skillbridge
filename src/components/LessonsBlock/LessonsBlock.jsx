// Styles
import './LessonsBlock.scss';

// Components
import { LessonsList } from '../LessonsList';

export const LessonsBlock = ({ curriculumItem, videoRef }) => {
  const { id, name, lessons } = curriculumItem;

  return (
    <div className="LessonsBlock">
      <span className="LessonsBlock__Number">
        0{id}
      </span>

      <h3 className="LessonsBlock__Title">
        {name}
      </h3>

      <LessonsList lessons={lessons} videoRef={videoRef} />
    </div>
  );
};
