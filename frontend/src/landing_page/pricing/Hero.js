import React from "react";

function Hero() {
  return (
    <section className="route-hero pricing-hero">
      <div className="container text-center">
        <div className="hero-kicker">Transparent by default</div>
        <h1 className="route-hero-title">Pricing that keeps investing simple.</h1>
        <p className="route-hero-copy">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="container pricing-grid">
        <div className="pricing-card">
          <img src="images/pricingEquity.svg" alt="Free equity delivery" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="pricing-card">
          <img src="images/intradayTrades.svg" alt="Intraday trades" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="pricing-card">
          <img src="images/pricingEquity.svg" alt="Direct mutual funds" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;