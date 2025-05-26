import React from "react";
import DashboardOverview from "./main/DashboardOverview";
import CalendarView from "./main/CalendarView";
import UpcomingSchedule from "./main/UpcomingSchedule";
import ActivityFeed from "./main/ActivityFeed";
import "../styles/DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div>
        <DashboardOverview />
      </div>
      <div className="dash-second-half">
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </main>
  );
}

export default DashboardMainContent;
