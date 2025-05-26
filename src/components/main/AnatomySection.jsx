import React from "react";
import "./AnatomySection.css";
import anatomyImage from "../../Assets/img2.jpg";
import { Search } from "lucide-react"; 

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      
      <button className="anatomy-zoom-btn" aria-label="Zoom">
        <Search size={20} />
      </button>
      
      <img src={anatomyImage} alt="Human Anatomy" className="anatomy-image" />
     
    
      <div className="anatomy-indicator"></div>
    </div>
  );
};

export default AnatomySection;