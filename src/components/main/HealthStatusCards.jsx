// import React from "react";
// import { healthCards } from "../../data/healthData";
// import "./HealthStatusCards.css";

// function HealthStatusCards() {
//   return (
//     <div className="health-cards">
//       {healthCards.map((card, idx) => (
//         <div key={idx} className={`card ${card.status.toLowerCase()}`}>
//           <h4>{card.name}</h4>
//           <p>{card.date}</p>
//           <span>Status: {card.status}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HealthStatusCards;


import React from "react";
import { healthCards } from "../../data/healthData";
import "./HealthStatusCards.css";

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, idx) => (
        <div key={idx} className={`card ${card.status.toLowerCase()}`}>
        <div className="card-content">

          <div className="card-emoji">{card.emoji}</div>
          <h4 className="card-title">{card.name}</h4>
        </div>
          <p className="card-date">Date: {card.date}</p>
          <div className="progress-bar-bg">
            <div
              className={`progress-bar ${card.status.toLowerCase()}`}
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;