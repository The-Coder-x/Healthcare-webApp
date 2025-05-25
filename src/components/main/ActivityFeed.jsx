import React from "react";
import "./ActivityFeed.css";

function ActivityFeed() {
  return (
    <section className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        <div style={{ height: "60%" }} className="bar" />
        <div style={{ height: "30%" }} className="bar" />
        <div style={{ height: "80%" }} className="bar" />
        <div style={{ height: "50%" }} className="bar" />
      </div>
    </section>
  );
}

export default ActivityFeed;


