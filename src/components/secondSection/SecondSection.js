import React from 'react'
import Button from "../common/Button";
import "./SecondSection.css";
import Hero from "../../assets/Hero.jpg";

function SecondSection({title1, title2, para1, para2, isImg}) {
  return (
    <>
      <div className='second-main'>
        <h2 className="second-title">
          {title1} <br />{title2}
        </h2>
        <p className="second-para">
          {para1}<br />{para2}
        </p>
        <div>
          <Button text="Get started" />
        </div>
      </div>

      {isImg && <img className="second-img" src={Hero} alt="Hero Image" />}
    </>
  );
}

export default SecondSection
