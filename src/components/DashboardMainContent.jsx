import React from "react";
import DashboardOverview from "./main/DashboardOverview";
import CalendarView from "./main/CalendarView";
import UpcomingSchedule from "./main/UpcomingSchedule";
import ActivityFeed from "./main/ActivityFeed";
import "./DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      {/* <CalendarView /> */}
      <ActivityFeed />
      <UpcomingSchedule />
    </main>
  );
}

export default DashboardMainContent;
