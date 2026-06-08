// Styles
import { useLayoutEffect, useRef } from 'react';
import './Switcher.scss';

export const Switcher = ({ selectedPeriod, setSelectedPeriod }) => {
  const monthlyButtonRef = useRef(null);
  const yearlyButtonRef = useRef(null);
  const togglerRef = useRef(null);

  useLayoutEffect(() => {
    const monthlyButton = monthlyButtonRef.current;
    const yearlyButton = yearlyButtonRef.current;
    const toggler = togglerRef.current;

    if (!monthlyButton || !yearlyButton || !toggler) {
      return;
    }

    const handleResize = () => {
      const monthlyButtonWidth = monthlyButton.clientWidth;
      const yearlyButtonWidth = yearlyButton.clientWidth;

      toggler.style.maxWidth = (selectedPeriod === 'monthly' ? monthlyButtonWidth : yearlyButtonWidth) + 'px';
      toggler.style.transform = selectedPeriod === 'monthly'
        ? 'translateX(0px)'
        : `translateX(${monthlyButtonWidth}px)`;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedPeriod]);

  const setMonthly = () => {
    setSelectedPeriod('monthly');
  };

  const setYearly = () => {
    setSelectedPeriod('yearly');
  }

  return (
    <div className="Switcher">
      <button
        ref={monthlyButtonRef}
        type="button"
        className={selectedPeriod === 'monthly' ? 'Switcher__Button Switcher__Button--Active' : 'Switcher__Button'}
        onClick={setMonthly}
      >
        Monthly
      </button>

      <button
        ref={yearlyButtonRef}
        type="button"
        className={selectedPeriod === 'yearly' ? 'Switcher__Button Switcher__Button--Active' : 'Switcher__Button'}
        onClick={setYearly}
      >
        Yearly
      </button>

      <div ref={togglerRef} className="Switcher__Toggler" />
    </div>
  );
};
