

import React, { useState } from "react";
import "./CalendarView.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example data (replace with your actual data)
const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const days = [
  { date: 25, slots: ["10:00", "11:00", "12:00"] },
  { date: 26, slots: ["08:00", "09:00", "10:00"] },
  { date: 27, slots: ["12:00", "13:00"] },
  { date: 28, slots: ["10:00", "11:00"] },
  { date: 29, slots: ["14:00", "16:00"] },
  { date: 30, slots: ["12:00", "14:00", "15:00"] },
  { date: 31, slots: ["09:00", "10:00", "11:00"] },
];
const selectedDayIdx = 1; // Tuesday (26th)
const selectedSlotIdx = 1; // 09:00

const appointments = [
  {
    title: "Dentist",
    emoji: "🦷",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    color: "purple",
  },
  {
    title: "Physiotherapy Appointment",
    emoji: "💪",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    color: "light",
  },
];

function CalendarView() {
  return (
    <section className="calendar-section">
      <div className="calendar-header">
        <span className="calendar-month">June 2025</span>
        <div className="calendar-nav">
          <button className="calendar-arrow">
            <ChevronLeft size={18} />
          </button>
          <button className="calendar-arrow">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="calendar-grid">
        {weekDays.map((day, idx) => (
          <div key={day} className="calendar-col">
            <div className="calendar-weekday">{day}</div>
            <div
              className={`calendar-day${
                idx === selectedDayIdx ? " selected" : ""
              }`}
            >
              {days[idx].date}
            </div>
            <div
              className={`calendar-slots${
                idx === selectedDayIdx ? " selected" : ""
              }`}
            >
              {days[idx].slots.map((slot, sIdx) => (
                <div
                  key={slot}
                  className={
                    idx === selectedDayIdx && sIdx === selectedSlotIdx
                      ? "calendar-slot active"
                      : "calendar-slot"
                  }
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="calendar-appointments">
        <div className="calendar-appointment-card purple">
          <div className="calendar-appointment-title">
            Dentist <span className="calendar-emoji">🦷</span>
          </div>
          <div className="calendar-appointment-time">09:00-11:00</div>
          <div className="calendar-appointment-doctor">
            Dr. Cameron Williamson
          </div>
        </div>
        <div className="calendar-appointment-card light">
          <div className="calendar-appointment-title">
            Physiotherapy Appointment <span className="calendar-emoji">💪</span>
          </div>
          <div className="calendar-appointment-time">11:00-12:00</div>
          <div className="calendar-appointment-doctor">Dr. Kevin Djones</div>
        </div>
      </div>
    </section>
  );
}

export default CalendarView;