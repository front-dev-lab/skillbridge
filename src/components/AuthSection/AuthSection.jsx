import { Link, useLocation } from 'react-router-dom';
import { normalizeText } from '../../utils/normalizeText';

// Styles
import './AuthSection.scss';

// Components
import { AuthForm } from '../AuthForm';

export const AuthSection = ({ className }) => {
  const { pathname } = useLocation();
  const isLogin = pathname.includes('login');
  const actionText = isLogin ? 'Login' : 'Sing Up';
  const linkPath = isLogin ? 'sign-up' : 'login';

  return (
    <section className={className + ' AuthSection'}>
      <div className="AuthSection__Header">
        <h2 className="AuthSection__Title">
          {actionText}
        </h2>

        <p>
          {isLogin
            ? 'Welcome back! Please log in to access your account.'
            : 'Create an account to unlock exclusive features.'}
        </p>
      </div>

      <AuthForm key={isLogin ? 'login-form' : 'signup-form'} isLogin={isLogin} />

      <div className="AuthSection__Separator">
        <span className="AuthSection__SeparatorText">
          OR
        </span>
      </div>

      <a
        href="https://goggle.com"
        className="AuthSection__GoogleLink"
        target="_blank"
      >
        <span className="AuthSection__GoogleLinkText">
          {actionText} with Google
        </span>
      </a>

      <p className="AuthSection__Text">
        {isLogin
          ? "Don’t have an account? "
          : "Already have an account? "
        }

        <Link
          to={`/${linkPath}`}
          className="AuthSection__Link"
        >
          {normalizeText(linkPath)}
        </Link>
      </p>
    </section>
  );
};
