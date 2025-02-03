import React from "react";
import Button from "../common/Button";
import "./SimplifyBlood.css";
import Supercharge from "../../assets/supercharge.svg";
import Optimise from "../../assets/optimise.svg";
import Enable from "../../assets/enable.svg";
import Card from "../common/Card";

function SimplifyBlood() {
  const cardData = [
    {
      title: "Supercharge Preventive Health Measures",
      para: "Empower your users with personalized health insights by integrating biomarker data such as thyroid markers, liver enzymes, and iron levels",
      img: Supercharge,
    },
    {
      title: "Optimise nutrition with key biomarkers",
      para: "Turn complex blood report data into actionable recommendations for better nutrition. Help your users discover how their lifestyle choices shape their health.",
      img: Optimise,
    },
    {
      title: "Enable Early Disease Risk Detection",
      para: "Spot early warning signs before they become critical. Guide your users through health changes with blood biomarker insights for better outcomes.",
      img: Enable,
    },
  ];
  return (
    <div className="simplify-main">
      <h2 className="simplify-title">
        Simplify blood report management for all use cases
      </h2>
      <p className="simplify-para">
        No more time wasted on manual data management. Get organised,
        standardised blood report data delivered seamlessly to your app for all use cases.
      </p>
      <Button text="Get started" />
      <div className="simplify-card-container">
        {cardData.map((card, i) => {
          return (
            <Card
              key={i}
              title={card.title}
              para={card.para}
              img={card.img}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SimplifyBlood;
