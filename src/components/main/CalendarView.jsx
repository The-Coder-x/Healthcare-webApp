import React from "react";
import { calendarAppointments } from "../../data/appointments";
import "./CalendarView.css";

function CalendarView() {
  return (
    <section className="calendar-section">
      <h3>June 2025</h3>
      <div className="calendar-grid">
        {calendarAppointments.map((day, idx) => (
          <div key={idx} className="calendar-cell">
            <span>{day.date}</span>
            <div className="slots">
              {day.slots.map((time, i) => (
                <div key={i}>{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;
