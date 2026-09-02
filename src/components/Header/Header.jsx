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
              <button type="button" disabled>
                About
              </button>
            </li>

            <li>
              <button type="button" disabled>
                Menu
              </button>
            </li>

            <li>
              <Link to="/booking" onClick={closeMenu}>
                Reservations
              </Link>
            </li>

            <li>
              <button type="button" disabled>
                Order Online
              </button>
            </li>

            <li>
              <button type="button" disabled>
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
