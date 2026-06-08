// Styles
import './TestimonialCard.scss';

// Components
import { ButtonLink } from '../ButtonLink';

const BASE_URL = import.meta.env.BASE_URL;

export const TestimonialCard = ({
  feedback,
  imageUrl,
  name,
}) => {
  return (
    <article className="TestimonialCard">
      <p className="TestimonialCard__Text">
        {feedback}
      </p>

      <div className="TestimonialCard__Details">
        <div className="TestimonialCard__User">
          <img src={BASE_URL + imageUrl.slice(1)} className="TestimonialsCard__Avatar" />

          {name}
        </div>

        <ButtonLink
          to="/"
          text="Read Fool Story"
          color="grey"
        />
      </div>
    </article>
  );
};
