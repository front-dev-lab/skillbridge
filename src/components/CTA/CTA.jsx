// Styles
import './CTA.scss';

// Components
import { ButtonLink } from '../ButtonLink';

export const CTA = () => (
  <div className="CTA">
    <article className="CTA__Article">
      <h4 className="CTA__Title">
        <span className="CTA__OrangeText">
          Together
        </span>
        , let's shape the future of digital innovation
      </h4>

      <p>
        Join us on this exciting learning journey and unlock your potential in design and development.
      </p>
    </article>

    <ButtonLink
      to="/"
      text="Join Now"
    />
  </div>
);
