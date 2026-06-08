// Styles
import './Burger.scss';

export const Burger = ({
  className,
  menuIsOpened,
  toggleMenu
}) => (
  <button
    type="button"
    className={menuIsOpened ? `${className} Burger Burger--Active` : `${className} Burger`}
    onClick={toggleMenu}
  >
    <span className={menuIsOpened ? "Burger__Line Burger__Line--Active" : "Burger__Line"}></span>
  </button>
);
