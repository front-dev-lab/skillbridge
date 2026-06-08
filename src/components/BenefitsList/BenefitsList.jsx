// Styles
import './BenefitsList.scss';

// Components
import { BenefitCard } from '../BenefitCard';

export const BenefitsList = ({ benefits }) => {
  return (
    <ul className="BenefitsList">
      {benefits.map(benefit => (
        <li key={benefit.id}>
          <BenefitCard benefit={benefit} />
        </li>
      ))}
    </ul>
  );
};
