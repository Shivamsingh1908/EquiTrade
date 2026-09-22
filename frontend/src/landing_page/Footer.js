import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-topline">
          <span className="section-eyebrow">Invest with intention</span>
          <span className="footer-topline-text">Clear tools. Thoughtful decisions.</span>
        </div>

        <div className="row text-start footer-columns">
          <div className="col-lg-4 mb-4">
            <Link className="brand-lockup mb-3" to="/" aria-label="EquiTrade home">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-bar brand-bar-one" />
                <span className="brand-bar brand-bar-two" />
                <span className="brand-bar brand-bar-three" />
                <span className="brand-arrow" />
              </span>
              <span>Equi<strong>Trade</strong></span>
            </Link>
            <p className="footer-brand-copy">
              A simpler way to discover, understand, and manage your investments.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="https://www.linkedin.com" aria-label="EquiTrade on LinkedIn" className="footer-social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" aria-label="EquiTrade on X" className="footer-social-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" aria-label="EquiTrade on LinkedIn" className="footer-social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" aria-label="EquiTrade on Instagram" className="footer-social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 mb-4">
            <h6 className="footer-heading">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About EquiTrade</Link></li>
              <li><Link to="/products" className="footer-link">Our platform</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 mb-4">
            <h6 className="footer-heading">Resources</h6>
            <ul className="list-unstyled">
              <li><Link to="/support" className="footer-link">Help centre</Link></li>
              <li><Link to="/support" className="footer-link">Contact support</Link></li>
              <li><Link to="/signup" className="footer-link">Open an account</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="footer-contact-card">
              <span className="footer-contact-label">Need a hand?</span>
              <h6>We are here to help you move forward.</h6>
              <Link to="/support" className="footer-contact-link">Visit the help centre <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p><strong>Important information:</strong> EquiTrade is an educational and investment technology platform. Investing in financial markets involves risk, and past performance does not guarantee future results.</p>
          <p>
            Please review all relevant documents carefully and consider your financial objectives and risk tolerance before investing. EquiTrade does not provide personalised financial advice.
          </p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EquiTrade. All rights reserved.</span>
          <span>Privacy · Terms · Risk disclosure</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
