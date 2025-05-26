import React from "react";
import { upcomingAppointments } from "../../data/appointments";
import "./UpcomingSchedule.css";


const groupByDay = (appointments) => {
  return appointments.reduce((acc, appt) => {
    if (!acc[appt.day]) acc[appt.day] = [];
    acc[appt.day].push(appt);
    return acc;
  }, {});
};

function UpcomingSchedule() {
  const grouped = groupByDay(upcomingAppointments);

  return (
    <section className="upcoming-schedule">
      <h3 className="upcoming-title">The Upcoming Schedule</h3>
      {Object.entries(grouped).map(([day, appts]) => (
        <div key={day} className="upcoming-day-group">
          <div className="upcoming-day-label">On {day}</div>
          <div className="upcoming-cards-row">
            {appts.map((appt, idx) => (
              <div className="upcoming-card" key={idx}>
                <div className="upcoming-card-title">
                  {appt.title}
                  {appt.emoji && (
                    <span className="upcoming-emoji">{appt.emoji}</span>
                  )}
                </div>
                <div className="upcoming-card-time">{appt.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;