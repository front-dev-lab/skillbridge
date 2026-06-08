import { useState } from 'react';

// Styles
import './FAQList.scss';

// Components
import { FAQItem } from '../FAQItem';

export const FAQList = ({ FAQs }) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <ul className="FAQList">
      {FAQs.map(({
        id,
        question,
        answer,
        offer,
      }) => (
        <li key={id}>
          <FAQItem
            id={id}
            question={question}
            answer={answer}
            offer={offer}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </li>
      ))}
    </ul>
  );
};
