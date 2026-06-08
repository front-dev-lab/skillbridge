// Styles
import './TestimonialsList.scss';

// Components
import { TestimonialCard } from '../TestimonialCard'

export const TestimonialsList = ({ testimonials }) => (
  <ul className="TestimonialsList">
    {testimonials.map(({
      id,
      feedback,
      imageUrl,
      name,
    }) => (
      <li key={id}>
        <TestimonialCard
          feedback={feedback}
          imageUrl={imageUrl}
          name={name}
        />
      </li>
    ))}
  </ul>
);
