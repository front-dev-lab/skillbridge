// Styles
import './CurriculumCard.scss';

export const CurriculumCard = ({ lesson }) => (
  <li className="CurriculumCard">
    <span className="CurriculumCard__Number">
      0{lesson.id}
    </span>

    {lesson.name}
  </li>
);
