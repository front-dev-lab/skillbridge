// Styles
import './AboutPageItemCard.scss';

const BASE_URL = import.meta.env.BASE_URL;

export const AboutPageItemCard = ({
  iconUrl,
  title,
  description,
}) => (
  <li className="AboutPageItemCard">
    <div className="AboutPageItemCard__Icon">
      <img src={BASE_URL + iconUrl.slice(1)} className="AboutPageItemCard__Image" />
    </div>

    <article className="AboutPageItemCard__Article">
      <h4 className="AboutPageItemCard__Title">
        {title}
      </h4>

      <p>{description}</p>
    </article>
  </li>
);
