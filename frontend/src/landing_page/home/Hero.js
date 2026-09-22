import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <div className="hero-kicker">A calmer way to invest</div>
        <img
          src="images/homeHero.png"
          alt="EquiTrade investing dashboard on desktop and mobile"
          className="hero-image"
        />
        <h1 className="hero-title">Invest in everything. <span>Understand it too.</span></h1>
        <p className="hero-copy">
          A focused investing platform for stocks, derivatives, mutual funds,
          and the decisions that matter next.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary site-cta" to="/signup">Open your account</Link>
          <Link className="btn btn-outline-primary" to="/products">Explore the platform</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;