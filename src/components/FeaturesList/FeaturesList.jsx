// Styles
import './FeaturesList.scss';

// Components
import { FeaturesItem } from '../FeaturesItem';
import { ButtonLink } from '../ButtonLink';

export const FeaturesList = ({ features }) => (
  <ul className="FeaturesList">
    <h4 className="FeaturesList__Title">
      Available Features
    </h4>

    {features.map(({ id, text, available }) => (
      <li key={id} className="FeaturesList__Item" >
        <FeaturesItem text={text} available={available} />
      </li>
    ))}

    <ButtonLink
      to="/"
      text="Get Started"
      height="big"
      width="wide"
      noBorderRadius
    />
  </ul>
);

