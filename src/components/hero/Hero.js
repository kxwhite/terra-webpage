import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Hero.css";

import Report1 from "../../assets/report1.svg";
import Report2 from "../../assets/report2.svg";
import Report3 from "../../assets/report3.svg";
import MobileScreen from "../../assets/optimise.svg";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="reports-container" ref={ref}>
      {[Report1, Report2, Report3].map((doc, index) => (
        <motion.img
          key={index}
          src={doc}
          alt={`Report ${index + 1}`}
          className={`report report-${index + 1}`}
          initial={{
            opacity: 0,
            rotate: index === 0 ? -8 : index === 1 ? 5 : -3,
            x: index === 0 ? -50 : index === 1 ? 30 : -20,
            y: index === 0 ? 20 : index === 1 ? 40 : 60,
          }}
          animate={{
            opacity: 1,
            rotate: !isInView ? 0 : index === 0 ? -8 : index === 1 ? 5 : -3,
            x: !isInView ? 0 : index === 0 ? -50 : index === 1 ? 30 : -20,
            y: !isInView ? 0 : index === 0 ? 20 : index === 1 ? 40 : 60,
          }}
          transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="hero-label"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Before & After
      </motion.div>

      <motion.img
        src={MobileScreen}
        alt="Mobile Screen"
        className="mobile-screen"
        animate={{
          x: isInView ? 0 : 100,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default Hero;
