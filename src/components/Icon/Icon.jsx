import { capitalizeText } from '../../utils/capitalizeText';

// Styles
import './Icon.scss';

export const Icon = ({ url, type }) => (
  <a
    href={url}
    className={`Icon Icon--${capitalizeText(type)}`}
    target="_blank"
  />
);
