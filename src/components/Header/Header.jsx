// Styles
import './Header.scss';

// Components
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { AuthLinks } from '../AuthLinks';
import { Burger } from '../Burger';

export const Header = ({ className, menuIsOpened, toggleMenu }) => (
  <header className={className + ' Header'}>
    <Container>
      <div className="Header__Content">
        <div className="Header__Column">
          <Logo />

          <Navigation className="Header__Navigation" />
        </div>

        <div className="Header__Column">
          <AuthLinks />

          <Burger
            className="Header__Burger"
            menuIsOpened={menuIsOpened}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </Container>
  </header>
);
