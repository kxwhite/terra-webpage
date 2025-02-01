import React, { useState } from "react";
import "./HowItWorks.css";
import Button from "../common/Button";
import Placeholder from "../../assets/Placeholder.webp";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-h2">How it works</h2>
      <p className="how-it-works-para">
        Streamline reward data easily through Terra API - no extra
        infrastructure required
      </p>
      <br />
      <div className="container">
        <div className="image-section">
          <img src={Placeholder} alt="Placeholder" className="hiw-image" />
        </div>

        <div className="steps-section">
          <div className="steps">
            <div
              className={`step ${activeStep === 1 ? "active" : ""}`}
              onClick={() => setActiveStep(1)}
            >
              <span className="icon">📦</span>
              Customise and embed your upload widget
            </div>
            <div
              className={`step ${activeStep === 2 ? "active" : ""}`}
              onClick={() => setActiveStep(2)}
            >
              <span className="icon">📂</span>
              Let Terra API process your users' blood reports
            </div>
            <div
              className={`step ${activeStep === 3 ? "active" : ""}`}
              onClick={() => setActiveStep(3)}
            >
              <span className="icon">📊</span>
              Receive standardised blood biomarker data
            </div>
          </div>

          <div className="cta-buttons">
            <Button text="Next step" colour="white" />
            <a href="#" className="secondary-btn">
              Try it now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
