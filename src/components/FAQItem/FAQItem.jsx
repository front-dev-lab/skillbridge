import { Link } from 'react-router-dom';

// Styles
import './FAQItem.scss';

export const FAQItem = ({
  id,
  question,
  answer,
  offer,
  activeId,
  setActiveId
}) => {
  const isSelected = id === activeId;

  const handleClick = isSelected
    ? () => setActiveId(0)
    : () => setActiveId(id);

  return (
    <div className={isSelected ? 'FAQItem FAQItem--Active' : 'FAQItem'}>
      <div className={isSelected ? 'FAQItem__Question FAQItem__Question--Active' : 'FAQItem__Question'}>
        {question}

        <button
          type="button"
          className={isSelected ? 'FAQItem__Button FAQItem__Button--Active' : 'FAQItem__Button'}
          onClick={handleClick}
        />
      </div>

      <div className={isSelected ? 'FAQItem__Answer FAQItem__Answer--Active' : 'FAQItem__Answer'}>
        {answer}

        <div className="FAQItem__Offer">
          {offer}

          <Link to="/" className="FAQItem__Link" />
        </div>
      </div>
    </div>
  );
};
