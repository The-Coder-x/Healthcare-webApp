// // import React from "react";
// // import "./ActivityFeed.css";

// // function ActivityFeed() {
// //   return (
// //     <section className="activity-feed">
// //       <h3>Activity</h3>
// //       <p>3 appointments this week</p>
// //       <div className="bar-chart">
// //         <div style={{ height: "60%" }} className="bar" />
// //         <div style={{ height: "30%" }} className="bar" />
// //         <div style={{ height: "80%" }} className="bar" />
// //         <div style={{ height: "50%" }} className="bar" />
// //       </div>
// //     </section>
// //   );
// // }

// // export default ActivityFeed;
// import React from "react";
// import "./ActivityFeed.css";

// const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// const activityData = [
//   [40, 70, 30],
//   [60, 90, 50],
//   [30, 50, 20],
//   [50, 60, 40],
//   [70, 80, 60],
//   [40, 60, 30],
//   [50, 70, 40],
// ];

// const ActivityFeed = () => {
//   return (
//     <div className="activity-card">
//       <div className="activity-header">
//         <span className="activity-title">Activity</span>
//         <span className="activity-appointments">
//           3 appointment on this week
//         </span>
//       </div>
//       <div className="activity-chart">
//         <div className="bars-container">
//           {activityData.map((vals, idx) => (
//             <div className="activity-bar-wrapper" key={idx}>
//               <div className="activity-bars">
//                 <div
//                   className="bar bar1"
//                   style={{ height: `${vals[0]}%` }}
//                 ></div>
//                 <div
//                   className="bar bar2"
//                   style={{ height: `${vals[1]}%` }}
//                 ></div>
//                 <div
//                   className="bar bar3"
//                   style={{ height: `${vals[2]}%` }}
//                 ></div>
//               </div>
//               <span className="day-label">{days[idx]}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;


import React from "react";
import "./ActivityFeed.css";

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