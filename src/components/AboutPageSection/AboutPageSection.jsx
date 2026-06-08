// Styles
import './AboutPageSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { AboutPageList } from '../AboutPageList';
import { CTA } from '../CTA';

export const AboutPageSection = ({
  id,
  title,
  description,
  items,
  className = '',
  withCTA = false,
}) => {
  return (
    <section id={id} className={className + " AboutPageSection"}>
      <Container>
        <div className="AboutPageSection__Content">
          <SectionOverview
            title={title}
            text={description}
            withoutButton
          />

          <AboutPageList items={items} />

          {withCTA && <CTA />}
        </div>
      </Container>
    </section>
  );
};
