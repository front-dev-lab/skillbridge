// Styles
import './ContactsList.scss';

export const ContactsList = () => (
  <ul className="ContactsList">
    <li>
      <a
        href="mailto:hello@skillbridge.com"
        className="ContactsList__Link ContactsList__Link--Email"
      >
        hello@skillbridge.com
      </a>
    </li>

    <li>
      <a
        href="tel:+91 91813 23 2309"
        className="ContactsList__Link ContactsList__Link--Phone"
      >
        +91 91813 23 2309
      </a>
    </li>

    <li>
      <a
        href="https://www.google.com/maps"
        className="ContactsList__Link ContactsList__Link--Location"
      >
        Somewhere in the World
      </a>
    </li>
  </ul>
);
