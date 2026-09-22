import React from "react";

function Hero() {
  return (
    <section className="route-hero products-hero">
      <div className="container text-center">
        <div className="hero-kicker">One connected ecosystem</div>
        <h1 className="route-hero-title">Tools that make the market feel clearer.</h1>
        <p className="route-hero-copy">
          Check out our{" "}
          <a href="#product-suite">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;