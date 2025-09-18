import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container py-3">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <img
            src="images/logo.svg"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
            alt="Logo"
          />
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
              <Link className="nav-link fs-5" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link fs-5" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link fs-5" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link fs-5" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className="btn btn-primary fs-6 fw-semibold px-4 py-2 rounded-pill shadow-sm"
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
