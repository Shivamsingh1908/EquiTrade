import React from "react";

function Pricing() {
  return (
    <section className="container section-space">
      <div className="pricing-layout">
        <div className="pricing-copy">
          <div className="section-eyebrow">Simple by design</div>
          <h1 className="mb-3 fs-2">Pricing that stays out of your way</h1>
          <p>
            Clear pricing for every kind of investor. No confusing tiers, no
            hidden charges, and no surprises at checkout.
          </p>
          <a href="/pricing" className="pricing-link">
            See full pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="pricing-cards">
            <div className="soft-panel pricing-card-home">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="soft-panel pricing-card-home">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;