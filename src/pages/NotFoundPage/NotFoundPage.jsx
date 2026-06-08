// Styles
import './NotFoundPage.scss';

// Components
import { Container } from '../../components/Container';
import { ButtonLink } from '../../components/ButtonLink';

export const NotFoundPage = ({ className }) => (
  <main className={className + " NotFoundPage"}>
    <Container>
      <div className="NotFoundPage__Content">
        <h2 className="NotFoundPage__Title">
          404 Page not found
        </h2>

        <ButtonLink
          text="Go back"
          to="/"
        />
      </div>
    </Container>
  </main>
);
