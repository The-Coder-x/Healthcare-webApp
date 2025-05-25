import React from "react";
import { healthCards } from "../../data/healthData";
import "./HealthStatusCards.css";

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, idx) => (
        <div key={idx} className={`card ${card.status.toLowerCase()}`}>
          <h4>{card.name}</h4>
          <p>{card.date}</p>
          <span>Status: {card.status}</span>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
