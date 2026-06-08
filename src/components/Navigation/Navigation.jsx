import { NavLink } from 'react-router-dom';
import { capitalizeText } from '../../utils/capitalizeText';
import { normalizeText } from '../../utils/normalizeText';

// Styles
import './Navigation.scss';

export const Navigation = ({
  className,
  type,
  closeMenu = () => {},
}) => {
  const linkNames = ['home', 'courses', 'about-us', 'pricing'];

  return (
    <nav className={className + ' Navigation'}>
      <ul className={type
          ? `Navigation__List Navigation__List--${capitalizeText(type)}`
          : 'Navigation__List'
      }>
        {linkNames.map((linkName, i) => (
          <li key={linkName + i}>
            <NavLink
              to={linkName === linkNames[0] ? '/' : linkName}
              className={({ isActive }) => isActive
                ? 'Navigation__Link Navigation__Link--Active'
                : 'Navigation__Link'
              }
              onClick={closeMenu}
            >
              {normalizeText(linkName)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
