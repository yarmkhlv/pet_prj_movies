import './header.css';

function Header() {
  return (
    <header className="header">
      <span className="header__text-home">Home</span>
      <button type="button" className="header__btn-login">
        Login
      </button>
    </header>
  );
}

export default Header;
