import React from "react";

function Hero() {
  return (
    <section className="support-hero" id="supportHero">
      {/* Title */}
      <div className="hero-kicker">Here when you need us</div>
      <h1 className="route-hero-title">Find your next answer faster.</h1>
      <p className="route-hero-copy">
        Search for an answer or browse help topics to create a ticket
      </p>

      {/* Search Bar */}
      <div
        className="input-group mb-5 shadow-lg"
        style={{ maxWidth: "600px", width: "90%" }}
      >
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Eg. how do I activate F&O"
        />
        <button className="btn btn-dark px-4">Search</button>
      </div>

      {/* Info Cards */}
      <div className="row support-card-grid w-100 justify-content-center px-3">
        {/* Card 1 */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-dark">
              <h5 className="fw-bold">Track Tickets</h5>
              <p className="small text-muted">
                View the status of your support tickets in one place.
              </p>
              <a href="" className="btn btn-outline-primary btn-sm">
                Track Now
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-dark">
              <h5 className="fw-bold">Popular Links</h5>
              <ul className="list-unstyled small">
                <li>
                  <a href="">Track account opening</a>
                </li>
                <li>
                  <a href="">Track segment activation</a>
                </li>
                <li>
                  <a href="">Intraday margins</a>
                </li>
                <li>
                  <a href="">Kite user manual</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-dark">
              <h5 className="fw-bold">Featured</h5>
              <ul className="list-unstyled small">
                <li>
                  <a href="">
                    Current Takeovers and Delisting – January 2024
                  </a>
                </li>
                <li>
                  <a href="">
                    Latest Intraday leverages – MIS & CO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
