import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container product-section" id="product-suite">
      <div className="row align-items-center">
        <div className="col-lg-6 product-visual">
          <img src={imageURL} alt={`${productName} platform`} className="img-fluid" />
        </div>
        <div className="col-lg-6 product-copy">
          <div className="section-eyebrow">Built for momentum</div>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo || "#"}>Try Demo</a>
            <a href={learnMore || "#"} className="product-link-secondary">
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay || "#"}>
              <img src="images/googlePlayBadge.svg" alt="Get it on Google Play" />
            </a>
            <a href={appStore || "#"}>
              <img
                src="images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;