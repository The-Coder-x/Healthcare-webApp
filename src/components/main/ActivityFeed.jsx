import React from "react";
import "../../styles/ActivityFeed.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const activityData = [
  [20, 40],
  [30, 60],
  [50, 20],
  [60, 50],
  [40, 30],
  [70, 90],
  [20, 40],
];

const ActivityFeed = () => {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        {activityData.map(([val1, val2], idx) => (
          <div className="activity-bar-wrapper" key={idx}>
            <div className="activity-bars">
              <div className="bar bar1" style={{ height: `${val1}%` }}></div>
              <div className="bar bar2" style={{ height: `${val2}%` }}></div>
            </div>
            <span className="day-label">{days[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;