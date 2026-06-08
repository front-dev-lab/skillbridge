import { Fragment } from 'react';

// Styles
import './Curriculum.scss';

// Components
import { CurriculumCard } from '../CurriculumCard';

export const Curriculum = ({ curriculum }) => (
  <div className="Curriculum">
    <h3 className="Curriculum__Title">
      Curriculum
    </h3>

    <ul className="Curriculum__List">
      {curriculum.map(lesson => (
        <Fragment key={lesson.id}>
          <CurriculumCard lesson={lesson} />
        </Fragment>
      ))}
    </ul>
  </div>
);
