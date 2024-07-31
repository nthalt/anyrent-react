import GenerateCalendar from "./GenerateCalendar";

const Calendar = () => {
  return (
    <div className="calendar">
      <div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <h3>Select check-in date</h3>
        <p>Add your travel dates for exact pricing</p>
        <br />
        <GenerateCalendar />
        <div className="keypad-date-container">
          <div className="keypad-button-container">
            <br />
            <br />
            <button className="keypad-button">&#x2328;</button>
          </div>
          <div className="clear-date-button-container">
            <button className="clear-date-button">Clear dates</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
