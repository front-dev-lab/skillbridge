import data from '../../data/data.json';

// Styles
import './TestimonialsSection.scss';

// Components
import { Container } from '../Container';
import { SectionOverview } from '../SectionOverview';
import { TestimonialsList } from '../TestimonialsList';

export const TestimonialsSection = ({ className }) => {
  const { testimonials } = data;

  return (
    <section id="our-testimonials" className={className + " TestimonialsSection"}>
      <Container>
        <div className="TestimonialsSection__Content">
          <SectionOverview
            title="Our Testimonials"
            text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            to="/"
          />

          <TestimonialsList testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
};
