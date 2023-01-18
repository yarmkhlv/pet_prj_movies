import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="header__text-home">Home</span>
      <button className="header__btn-login">Login</button>
    </header>
  );
}

export default Header;
