import { useSearchParams } from 'react-router-dom';
import { convertToUrlText } from '../../utils/convertToUrlText';

// Styles
import './LessonCard.scss';

export const LessonCard = ({ lesson, videoRef }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLesson = searchParams.get('lesson');
  const {
    id,
    name,
    duration
  } = lesson;
  const convertedName = convertToUrlText(name);
  const isActive = selectedLesson === convertedName;

  const handleClick = () => {
    setSearchParams({ lesson: convertedName });
    videoRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <li
      className={isActive ? "LessonCard LessonCard--Active" : "LessonCard"}
      onClick={handleClick}
    >
      <div className="LessonCard__Text">
        <h4 className="LessonCard__Title">
          {name}
        </h4>

        <span className="LessonCard__Number">
          Lesson 0{id}
        </span>
      </div>

      <div className={isActive ? "LessonCard__Duration LessonCard__Duration--Active" : "LessonCard__Duration"}>
        <span className="LessonCard__DurationText">
          {duration}
        </span>
      </div>
    </li>
  );
};
