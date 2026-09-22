import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container py-2">
        <Link className="brand-lockup" to="/" aria-label="EquiTrade home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-bar brand-bar-one" />
            <span className="brand-bar brand-bar-two" />
            <span className="brand-bar brand-bar-three" />
            <span className="brand-arrow" />
          </span>
          <span>Equi<strong>Trade</strong></span>
        </Link>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <Link className="nav-link site-nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link site-nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link site-nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link site-nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className="btn btn-primary site-cta px-4 py-2"
                to="/signup"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
