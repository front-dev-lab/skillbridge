// Styles
import './PageOverview.scss';

//Components
import { Container } from '../Container';

export const PageOverview = ({ title, text, id = "" }) => (
  <section id={id} className="PageOverview">
    <Container>
      <div className="PageOverview__Content">
        <h2 className="PageOverview__Title">
          {title}
        </h2>

        <p>{text}</p>
      </div>
    </Container>
  </section>
);
