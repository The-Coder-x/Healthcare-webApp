import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../../styles/DashboardOverview.css";
import CalendarView from "./CalendarView";

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
      <CalendarView />
    </section>
  );
}

export default DashboardOverview;
