import { Fragment } from 'react';
import data from '../../data/data.json';

// Styles
import './Pricing.scss';

// Components
import { PlanCard } from '../PlanCard';

export const Pricing = ({ selectedPeriod }) => {
  const { plans } = data;

  return (
    <div className="Pricing">
      {plans.map(plan => (
        <Fragment key={plan.id}>
          <PlanCard selectedPeriod={selectedPeriod} plan={plan} />
        </Fragment>
      ))}
    </div>
  );
};
