import { Link } from 'react-router-dom';
import { normalizeText } from '../../utils/normalizeText';

// Styles
import './LinksList.scss';

export const LinksList = ({ hashTags, to }) => (
  <ul className="LinksList">
    {hashTags.map((hashTag, i) => (
      <li key={hashTag + i}>
        <Link
          to={`${to}#${hashTag.toLowerCase()}`}
          state={{ scrollTo: hashTag }}
          className="LinksList__Link"
        >
          {normalizeText(hashTag)}
        </Link>
      </li>
    ))}
  </ul>
);
