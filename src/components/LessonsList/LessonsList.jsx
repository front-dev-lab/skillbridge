import { Fragment } from 'react';

// Styles
import './LessonsList.scss';

// Components
import { LessonCard } from '../LessonCard';

export const LessonsList = ({ lessons, videoRef }) => (
  <ul className="LessonsList">
    {lessons.map(lesson => (
      <Fragment key={lesson.id}>
        <LessonCard lesson={lesson} videoRef={videoRef} />
      </Fragment>
    ))}
  </ul>
);
