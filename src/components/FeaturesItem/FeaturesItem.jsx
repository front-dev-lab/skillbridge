// Styles
import './FeaturesItem.scss';

export const FeaturesItem = ({ text, available }) => (
  <div className="FeaturesItem">
    <div className={available ? 'FeaturesItem__Icon FeaturesItem__Icon--Tick' : 'FeaturesItem__Icon FeaturesItem__Icon--Cross'} />

    <p>{text}</p>
  </div>
);
