// Styles
import './Menu.scss';

// Components
import { Container } from '../Container';
import { Navigation } from '../Navigation';

export const Menu = ({ className, closeMenu }) => {
  return (
    <aside className={className + ' Menu'}>
      <Container>
        <div className="Menu__Content">
          <Navigation closeMenu={closeMenu} type="menu" />
        </div>
      </Container>
    </aside>
  );
};
