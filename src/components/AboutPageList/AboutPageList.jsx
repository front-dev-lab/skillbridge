import { Fragment } from 'react';

// Styles
import './AboutPageList.scss';

// Components
import { AboutPageItemCard } from '../AboutPageItemCard';

export const AboutPageList = ({ items }) => (
  <ul className="AboutPageList">
    {items.map(({ id, icon, title, text }) => (
      <Fragment key={id}>
        <AboutPageItemCard
          iconUrl={icon}
          title={title}
          description={text}
        />
      </Fragment>
    ))}
  </ul>
);
