import React from "react";
import Button from "../common/Button";
import "./Header.css";
import Hero from "../hero/Hero";

export default function Header() {
  return (
    <div className="header-main">
      <div className="header-title-container">
        <h1 className="header-title">
          Turn scattered blood reports into structured data
        </h1>
      </div>
      <p className="header-para">
        Get precise blood test data such as blood cell counts, Hba1c,
        biochemical markers, and lipid profiles into your app.
      </p>
      <div className="header-buttons">
        <Button text="Get started" />
        <Button text="Request a call" colour="white" />
      </div>
      <Hero />
    </div>
  );
}
