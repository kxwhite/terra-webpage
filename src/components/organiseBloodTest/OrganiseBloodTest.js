import React from "react";
import Button from "../common/Button";
import "./OrganiseBloodTest.css";
import Supercharge from "../../assets/supercharge.svg";
import Optimise from "../../assets/optimise.svg";
import Enable from "../../assets/enable.svg";
import Card from "../common/Card";

function OrganiseBloodTest() {
  return (
    <div className="organise-main">
      <h2 className="organise-title">
        Organise blood test data <br />
        without the manual hassle
      </h2>
      <p className="organise-para">
        Streamline, standardise and make sense of your users’ blood test data
        with Terra API’s <br />
        blood biomarker API.
      </p>
      <div>
        <Button text="Get started" />
      </div>
      <div className="organise-card-container">
        <div
          className="organise-card-1"
        >
          <Card
            title="Streamline the way you get blood report data from all your users"
            para="Unify blood biomarker data from different labs and formats, enabling consistent and actionable insights."
            img={Supercharge}
            colour="#BBE0FD"
          />
        </div>
        <div
          className="organise-card-2"
        >
          <Card
            title="Standardise blood biomarker data across all formats"
            para="Transform complex blood reports into standardized data, no matter the source. Deliver consistent results for biomarkers like insulin, platelets, and triglycerides at scale."
            img={Optimise}
            colour="#FFEC80"
          />
        </div>
        <div
          className="organise-card-3"
        >
          <Card
            title="Organise your blood, wearable and sensor data all in one place"
            para="Unify health data from blood tests, wearables, and sensors into a single platform. Gain a 360-degree view of user health with integrations across all leading devices and systems."
            img={Enable}
            colour="#F1E9FF"
          />
        </div>
      </div>
      <div className="semi-circle"></div>
    </div>
  );
}

export default OrganiseBloodTest;
