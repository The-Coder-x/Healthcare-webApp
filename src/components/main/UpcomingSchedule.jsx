import React from "react";
import { upcomingAppointments } from "../../data/appointments";
import SimpleAppointmentCard from "../SimpleAppointmentCard";
import "./UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((appt, idx) => (
        <SimpleAppointmentCard key={idx} {...appt} />
      ))}
    </section>
  );
}

export default UpcomingSchedule;
