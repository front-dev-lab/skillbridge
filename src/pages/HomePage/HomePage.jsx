import { useRef } from 'react';

// Hooks
import { useScrollToHash } from '../../hooks/useScrollToHash';

// Styles
import './HomePage.scss';

// Components
import { Hero } from '../../components/Hero';
import { BenefitsSection } from '../../components/BenefitsSection';
import { CoursesSection } from '../../components/CoursesSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { PricingSection } from '../../components/PricingSection';
import { FAQSection } from '../../components/FAQSection';

export const HomePage = ({ className }) => {
  const pageRef = useRef(null);

  useScrollToHash(pageRef);

  return (
    <main ref={pageRef} className={className + " HomePage"}>
      <Hero className="HomePage__Hero" />

      <BenefitsSection className="HomePage__Benefits" />

      <CoursesSection className="HomePage__Courses" />

      <TestimonialsSection className="HomePage__Testimonials" />

      <PricingSection className="HomePage__Pricing" />

      <FAQSection className="HomePage__FAQ" />
    </main>
  );
};
