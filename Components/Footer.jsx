import logo from "./../src/images/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand-section">
          <img src={logo} alt="Ashok Cherukuri Logo" className="footer-logo" />
          <p className="footer-bio">
            Building scalable web applications with passion and precision.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/ashok-07c"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/cherukuriashok2007/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:cherukuriashok.07@gmail.com" aria-label="Email">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copy">
          {"\u00A9"} {new Date().getFullYear()} Ashok Cherukuri. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
