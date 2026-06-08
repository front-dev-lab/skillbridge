// Styles
import './PlanCard.scss';

// Components
import { FeaturesList } from '../FeaturesList';

export const PlanCard = ({ selectedPeriod, plan }) => {
  const { name, price, features } = plan;
  const period = selectedPeriod === 'monthly' ? 'month' : 'year';
  const selectedPrice = selectedPeriod === 'monthly' ? price.perMonth : price.perYear;

  return (
    <div className="PlanCard">
      <h3 className="PlanCard__Title">
        {name}
      </h3>

      <div className="PlanCard__Price">
        ${selectedPrice}

        <span className="PlanCard__Period">
          /{period}
        </span>
      </div>

      <FeaturesList features={features} />
    </div>
  );
};
