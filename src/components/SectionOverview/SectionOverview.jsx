// Styles
import './SectionOverview.scss';

// Components
import { ButtonLink } from '../ButtonLink';
import { Switcher } from '../Switcher';

export const SectionOverview = ({
  title,
  text,
  to = '/',
  inFAQ = false,
  withSwitcher = false,
  selectedPeriod = 'monthly',
  setSelectedPeriod = () => { },
  withoutButton = false,
}) => {
  let className = 'SectionOverview';

  if (withSwitcher) {
    className = `${className} ${className}--WithSwitcher`;
  }

  if (inFAQ) {
    className = `${className} ${className}--InFAQ`;
  }

  if (withoutButton) {
    className = `${className} ${className}--WithoutButton`
  }

  return (
    <article className={className}>
      {!withoutButton ? (
        <h2 className="SectionOverview__Title">
          {title}
        </h2>
      ) : (
        <h3 className="SectionOverview__Title SectionOverview__Title--WithoutButton">
          {title}
        </h3>
      )}

      <p className={inFAQ ? 'SectionOverview__Text SectionOverview__Text--InFAQ' : 'SectionOverview__Text'}>
        {text}
      </p>

      {withSwitcher ? (
        <Switcher selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
      ) : (
        withoutButton || (
          <ButtonLink
            to={to}
            text={inFAQ ? `View ALL FAQ's` : 'View ALL'}
            color="white"
          />
        )
      )}
    </article>
  );
};
