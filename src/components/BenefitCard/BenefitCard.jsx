// Styles
import { Link } from 'react-router-dom';
import './BenefitCard.scss';

export const BenefitCard = ({ benefit }) => {
  const {id, title, description} = benefit;

  return (
    <div className="BenefitCard">
      <span className="BenefitCard__Number">
        {"0" + id}
      </span>

      <article className="BenefitCard__Article">
        <h3 className="BenefitCard__Title">
          {title}
        </h3>

        <p>
          {description}
        </p>
      </article>

      <Link to="" className="BenefitCard__Link" />
    </div>
  );
};
