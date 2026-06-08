import data from '../../data/data.json';

// Styles
import './BenefitsSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { BenefitsList } from '../BenefitsList';

export const BenefitsSection = ({ className }) => {
  const { benefits } = data;

  return (
    <section id="benefits" className={className + " BenefitsSection"}>
      <Container>
        <div className="BenefitsSection__Content">
          <SectionOverview
            title="Benefits"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            to="/"
          /> 

          <BenefitsList benefits={benefits} />
        </div>
      </Container>
    </section>
  );
};
