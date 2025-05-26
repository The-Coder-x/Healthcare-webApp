// import React from "react";
// import { healthStatus } from "../../data/healthData";
// import "./AnatomySection.css";
// import anatomyImage from "../../resources/img.jpeg"; // Import the image

// const AnatomySection = () => {
//   return (
//     <div className="anatomy-container">
//       <img
//         src={anatomyImage} // Adjust the path as necessary
//         alt="Human Anatomy"
//         className="anatomy-image"
//       />
//     </div>
//   );
// };


// export default AnatomySection;



import React from "react";
import "./AnatomySection.css";
import anatomyImage from "../../resources/img2.jpg";
import { Search } from "lucide-react"; // or use any magnifier icon

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      {/* Zoom icon */}
      <button className="anatomy-zoom-btn" aria-label="Zoom">
        <Search size={20} />
      </button>
      {/* Anatomy image */}
      <img src={anatomyImage} alt="Human Anatomy" className="anatomy-image" />
     
    
      {/* Optional: bottom indicator */}
      <div className="anatomy-indicator"></div>
    </div>
  );
};

export default AnatomySection;