// import React from "react";
import { useState, useEffect ,useRef } from "react";
import PropTypes from "prop-types";

const CalendarModal = ({ isOpen, onClose, onSelect, activeButton }) => {
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);
  const [activeTab, setActiveTab] = useState("Dates");
  const [calendars, setCalendars] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const currentMonth = generateCalendarData(
        now.getFullYear(),
        now.getMonth()
      );
      const nextMonth = generateCalendarData(
        now.getFullYear(),
        now.getMonth() + 1
      );
      console.log("Calendars generated:", [currentMonth, nextMonth]);
      setCalendars([currentMonth, nextMonth]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  useEffect(() => {
    if (isOpen) {
      const currentMonth = generateCalendarData(
        currentDate.getFullYear(),
        currentDate.getMonth()
      );
      const nextMonth = generateCalendarData(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
      );
      setCalendars([currentMonth, nextMonth]);
    }
  }, [isOpen, currentDate]);

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
              onClick={handleDateClick}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleDateClick = (event) => {
    if (event.target.classList.contains("calendar-day")) {
      const selectedDate = new Date(event.target.dataset.date);
      if (activeButton === "check-in") {
        setSelectedCheckInDate(selectedDate);
        if (selectedCheckOutDate && selectedDate > selectedCheckOutDate) {
          setSelectedCheckOutDate(null);
        }
      } else {
        if (selectedCheckInDate && selectedDate < selectedCheckInDate) {
          alert("Check-out date must be after check-in date");
          return;
        }
        setSelectedCheckOutDate(selectedDate);
      }
      highlightSelectedDates();
      updateDateDisplay();
      onClose(); // Close the modal after selection
    }
  };
  const handleDateOptionClick = (days) => {
    let activeDate =
      activeButton === "check-in" ? selectedCheckInDate : selectedCheckOutDate;
    if (activeDate) {
      if (days !== 0) {
        activeDate.setDate(activeDate.getDate() + days);
      }
      if (activeButton === "check-in") {
        setSelectedCheckInDate(activeDate);
      } else {
        setSelectedCheckOutDate(activeDate);
      }
      updateDateDisplay();
      highlightSelectedDates();
    }
  };

  const updateDateDisplay = () => {
    if (selectedCheckInDate) {
      onSelect("check-in", formatDate(selectedCheckInDate));
    }
    if (selectedCheckOutDate) {
      onSelect("check-out", formatDate(selectedCheckOutDate));
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const highlightSelectedDates = () => {
    document.querySelectorAll(".calendar-day").forEach((day) => {
      const dayDate = new Date(day.dataset.date);
      day.classList.remove("selected", "in-range");
      if (
        selectedCheckInDate &&
        dayDate.getTime() === selectedCheckInDate.getTime()
      ) {
        day.classList.add("selected");
      }
      if (
        selectedCheckOutDate &&
        dayDate.getTime() === selectedCheckOutDate.getTime()
      ) {
        day.classList.add("selected");
      }
      if (
        selectedCheckInDate &&
        selectedCheckOutDate &&
        dayDate > selectedCheckInDate &&
        dayDate < selectedCheckOutDate
      ) {
        day.classList.add("in-range");
      }
    });
  };

  //   if (!isOpen) return null;

  return (
    // <div className="calendar-modal">
    <div className={`calendar-modal ${isOpen ? "is-open" : ""}`} ref={modalRef}>
      <button onClick={onClose} className="close-button-calendar">
        Close
      </button>
      <div className="calendar-header">
        {["Dates", "Months", "Flexible"].map((tab) => (
          <button
            key={tab}
            className={`calendar-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="calendar-navigation">
        <button onClick={() => navigateMonth(-1)}>&larr;</button>
        <button onClick={() => navigateMonth(1)}>&rarr;</button>
      </div>
      <div className="calendar-container" onClick={handleDateClick}>
        {console.log("Rendering calendars:", calendars)}
        {calendars.map(renderCalendar)}
      </div>
      <div className="date-options">
        {[0, 1, 2, 3, 7, 14].map((days) => (
          <button
            key={days}
            className="date-option"
            onClick={() => handleDateOptionClick(days)}
          >
            {days === 0 ? "Exact dates" : `± ${days} day${days > 1 ? "s" : ""}`}
          </button>
        ))}
      </div>
    </div>
  );
};

CalendarModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    activeButton: PropTypes.string,
  };

export default CalendarModal;
