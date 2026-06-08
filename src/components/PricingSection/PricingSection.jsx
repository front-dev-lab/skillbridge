import { useState } from 'react';

// Styles
import './PricingSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { Switcher } from '../Switcher';
import { Pricing } from '../Pricing';

export const PricingSection = ({ className, withoutText }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  return (
    <section className={className + ' PricingSection'}>
      <Container>
        <div className="PricingSection__Content">
          {!withoutText ? (
            <SectionOverview
              title="Our Pricing"
              text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
              withSwitcher
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          ) : (
            <Switcher
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          )}

          <Pricing selectedPeriod={selectedPeriod} />
        </div>
      </Container>
    </section>
  );
};
