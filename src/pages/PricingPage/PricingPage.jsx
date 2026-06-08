// Styles
import './PricingPage.scss';

// Components
import { PageOverview } from '../../components/PageOverview';
import { PricingSection} from '../../components/PricingSection';
import { FAQSection} from '../../components/FAQSection';

export const PricingPage = ({ className }) => {
  return (
    <main className={className + " PricingPage"}>
      <PageOverview
        title="Our Pricings"
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />

      <PricingSection className="PricingPage__Pricing" withoutText />

      <FAQSection />
    </main>
  );
};
