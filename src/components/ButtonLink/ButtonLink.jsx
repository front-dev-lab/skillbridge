import { Link } from 'react-router-dom';
import { capitalizeText } from '../../utils/capitalizeText';

// Styles
import './ButtonLink.scss';

export const ButtonLink = ({
  to,
  text,
  height,
  width,
  color,
  noBorderRadius,
  isButton = false,
  disabled = false,
}) => {
  let className = noBorderRadius ? 'ButtonLink ButtonLink--NoBorderRadius' : 'ButtonLink';

  const editClassName = text => {
    className = `${className} ButtonLink--${capitalizeText(text)}`;
  }

  if (height) {
    editClassName(height);
  }

  if (width) {
    editClassName(width);
  }

  if (color) {
    editClassName(color);
  }

  return isButton ? (
    <button
      type="submit"
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  ) : (
    <Link to={to} className={className}>
      {text}
    </Link>
  )
};
