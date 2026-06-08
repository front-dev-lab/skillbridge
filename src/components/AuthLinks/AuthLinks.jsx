import { Link } from 'react-router-dom';

// Styles
import './AuthLinks.scss';

// Components
import { ButtonLink } from '../ButtonLink';

export const AuthLinks = () => (
  <div className="AuthLinks">
    <Link to="sign-up" className="AuthLinks__Link">
      Sign Up
    </Link>

    <ButtonLink
      to="login"
      text="Login"
      height="small"
    />
  </div>
);
