import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <div className="container border-top pt-5">
        {/* Top Footer Content */}
        <div className="row text-start">
          {/* Logo + Info */}
          <div className="col-lg-3 mb-4">
            <img
              src="images/logo.svg"
              style={{ width: "150px" }}
              alt="Logo"
              className="mb-3"
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark fs-5 footer-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-5 footer-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark fs-5 footer-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-dark fs-5 footer-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Products</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Referral programme</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Zerodha.tech</a></li>
              <li><a href="#" className="footer-link">Press & media</a></li>
              <li><a href="#" className="footer-link">CSR</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Support portal</a></li>
              <li><a href="#" className="footer-link">Z-Connect blog</a></li>
              <li><a href="#" className="footer-link">List of charges</a></li>
              <li><a href="#" className="footer-link">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Open an account</a></li>
              <li><a href="#" className="footer-link">Fund transfer</a></li>
              <li><a href="#" className="footer-link">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div
          className="mt-5 text-muted"
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>
        </div>
      </div>

      {/* Custom Styles for Hover */}
      <style jsx>{`
        .footer-link {
          color: #333;
          text-decoration: none;
          transition: color 0.3s, text-decoration 0.3s;
        }
        .footer-link:hover {
          color: #0d6efd; /* Bootstrap primary */
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
