import data from '../../data/data.json';

// Styles
import './FAQSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { FAQList } from '../FAQList';

export const FAQSection = ({ className }) => {
  const { FAQs } = data;

  return (
    <section id="our-faq" className={className + ' FAQSection'}>
      <Container>
        <div className="FAQSection__Content">
          <SectionOverview
            title="Frequently Asked Questions"
            text="Still you have any questions? Contact our Team via support@skillbridge.com"
            to="/"
            inFAQ
          />

          <FAQList FAQs={FAQs} />
        </div>
      </Container>
    </section>
  );
};
