import React from "react";

function Education() {
  return (
    <section className="container section-space">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img className="img-fluid" src="images/education.svg" alt="Market education illustration" />
        </div>
        <div className="col-lg-6">
          <div className="section-eyebrow">Learn before you leap</div>
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;