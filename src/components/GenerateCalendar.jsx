import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GenerateCalendar = ({ initialDate, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    const currentMonth = generateCalendarData(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const nextMonth = generateCalendarData(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCalendars([currentMonth, nextMonth]);
  }, [currentDate]);

  const generateCalendarData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      year,
      month: monthNames[month],
      days: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      startingDay,
    };
  };

  const renderCalendar = (calendarData) => {
    const { year, month, days, startingDay } = calendarData;

    return (
      <div className="month" key={`${year}-${month}`}>
        <h3>
          {month} {year}
        </h3>
        <div className="calendar">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day}>{day}</div>
          ))}
          {Array.from({ length: startingDay }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}
          {days.map((day) => (
            <div
              key={`${year}-${month}-${day}`}
              className="calendar-day"
              data-date={`${year}-${month}-${day}`}
              // onClick={handleDateClick}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <div className="calendar-component2">
      <div className="calendar-navigation2">
        <button onClick={() => navigateMonth(-1)}>&larr;</button>
        <button onClick={() => navigateMonth(1)}>&rarr;</button>
      </div>
      <div
        className="calendar-container2"
        onClick={(e) => {
          if (e.target.classList.contains("calendar-day")) {
            onDateSelect(new Date(e.target.dataset.date));
          }
        }}
      >
        {calendars.map(renderCalendar)}
      </div>
    </div>
  );
};

GenerateCalendar.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  onDateSelect: PropTypes.func.isRequired,
};

export default GenerateCalendar;
