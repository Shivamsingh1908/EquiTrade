import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">
        <div className="col-lg-6 product-copy order-2 order-lg-1">
          <div className="section-eyebrow">Built for insight</div>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore || "#"}>Learn More</a>
          </div>
        </div>
        <div className="col-lg-6 product-visual order-1 order-lg-2">
          <img src={imageURL} alt={`${productName} platform`} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;