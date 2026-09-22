import React from "react";

function Hero() {
  return (
    <section className="route-hero about-hero">
      <div className="container text-center">
        <div className="hero-kicker">The people behind the product</div>
        <h1 className="route-hero-title">Technology should remove friction, not add to it.</h1>
        <p className="route-hero-copy">EquiTrade is built around a simple belief: better tools help more people make confident decisions.</p>
      </div>

      <div className="container about-story">
        <div className="col-lg-6">
          <p>
            EquiTrade was created to remove the barriers that make investing feel
            complicated: unclear pricing, scattered tools, and too much noise.
          </p>
          <p>
            Today, our platform brings research, investing, and portfolio
            awareness together in one focused experience.
          </p>
          <p>
            We are building for thoughtful investors who want to understand
            their choices and move with confidence.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Alongside the platform, we create practical learning resources that
            help people build stronger financial habits over time.
          </p>
          <p>
            <a href="/products" style={{ textDecoration: "none" }}>
              Explore our platform
            </a>
            to see how EquiTrade makes the investing journey more connected.
          </p>
          <p>
            We keep improving the experience with a simple promise: useful
            technology should make the next decision easier to see.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;