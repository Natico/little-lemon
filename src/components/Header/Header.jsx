import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import menuIcon from "../../assets/hamburger-menu.svg";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          className="site-header__logo-link"
          aria-label="Little Lemon home"
          onClick={closeMenu}
        >
          <img
            className="site-header__logo"
            src={logo}
            alt="Little Lemon"
          />
        </Link>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menuIcon} alt="" />
        </button>

        <nav
          id="main-navigation"
          className={`site-header__nav ${
            isMenuOpen ? "site-header__nav--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="site-header__nav-list">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#menu" onClick={closeMenu}>
                Menu
              </a>
            </li>

            <li>
              <Link to="/booking" onClick={closeMenu}>
                Reservations
              </Link>
            </li>

            <li>
              <a href="#order-online" onClick={closeMenu}>
                Order Online
              </a>
            </li>

            <li>
              <a href="#login" onClick={closeMenu}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;