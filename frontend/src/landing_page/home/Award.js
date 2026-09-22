import React from "react";

function Awards() {
  return (
    <section className="container section-space">
      <div className="row">
        <div className="col-lg-6 p-4 p-lg-5">
          <img className="img-fluid" src="images/largestBroker.svg" alt="EquiTrade market activity" />
        </div>
        <div className="col-lg-6 p-4 p-lg-5 mt-lg-5">
          <div className="section-eyebrow">Built for real decisions</div>
          <h1>Everything you need to invest with confidence</h1>
          <p className="mb-5">
            2+ million EquiTrade clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </section>
  );
}

export default Awards;