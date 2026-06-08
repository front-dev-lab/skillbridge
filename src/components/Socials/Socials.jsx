// Styles
import './Socials.scss';

// Components
import { Icon } from '../Icon';

export const Socials = () => (
  <ul className="Socials">
    <li>
      <Icon
        url="https://www.facebook.com/"
        type="facebook"
      />
    </li>

    <li>
      <Icon
        url="https://x.com/"
        type="twitter"
      />
    </li>

    <li>
      <Icon
        url="https://www.instagram.com/"
        type="instagram"
      />
    </li>
  </ul>
);
