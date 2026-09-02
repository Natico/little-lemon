import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <h2 className="site-footer__brand">Little Lemon</h2>
          <p className="site-footer__text">
            Fresh Mediterranean food served in the heart of Chicago.
          </p>
        </div>

        <address className="site-footer__address">
          123 Lemon Street
          <br />
          Chicago, IL
          <br />
          <a href="tel:+13125550110">(312) 555-0110</a>
        </address>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/booking">Reservations</Link>
        </nav>

        <p className="site-footer__copyright">© Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
