/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/react-in-jsx-scope */

type MenuHamburgerProps = {
  isMobile: boolean;
  menuOpen: boolean;
  handleMenuClick: () => void;
}

function MenuHamburger({ isMobile, menuOpen, handleMenuClick }: MenuHamburgerProps) {
  return (
    isMobile ? (
      <button
        onClick={handleMenuClick}
        type="button"
        className="hamburger"
      >
        {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
      </button>
    ) : null
  );
}

export default MenuHamburger;
