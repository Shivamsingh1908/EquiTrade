import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="container section-space">
      <div className="row text-center">
      <div className="section-eyebrow">Your next move</div>
        <h1 className="mt-5">Open a EquiTrade account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link className="btn btn-primary site-cta mx-auto" style={{ maxWidth: "13rem" }} to="/signup#signup-form">Sign up now</Link>
      </div>
    </section>
  );
}

export default OpenAccount;