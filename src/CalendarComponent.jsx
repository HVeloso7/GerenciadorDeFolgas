import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarComponent() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt(`Adicionar folga para o dia ${info.dateStr}:`);
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      events={events}
      height="auto"
    />
  );
}
