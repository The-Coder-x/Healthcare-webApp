import React from "react";
import { healthStatus } from "../../data/healthData";
import "./AnatomySection.css";
import anatomyImage from "../../resources/img.jpeg"; // Import the image

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <img
        src={anatomyImage} // Adjust the path as necessary
        alt="Human Anatomy"
        className="anatomy-image"
      />
    </div>
  );
};


export default AnatomySection;
