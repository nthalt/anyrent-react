// import React from 'react';
// import './Amenities.css'; // Import the CSS file for styling

const Amenities = () => {
  return (
    <div className="amenities">
      <br /><br />
      <hr />
      <br /><br />
      <h3>What this place offers</h3>
      <br />
      <div className="amenities-list">
        <div>&#127859; Kitchen</div>
        <div>&#128246; Wifi</div>
        <div>&#128250; TV</div>
        <div>&#128640; Elevator</div>
        <div>&#128711; Washer</div>
        <div>&#128716; Dryer</div>
        <div>&#128135; Hair Dryer</div>
        <div>&#129364; Refrigerator</div>
        <div>&#128658; <strike>Carbon monoxide alarm</strike></div>
        <div>&#128658; <strike>Smoke alarm</strike></div>
        <div>&#10052; Air conditioning</div>
      </div>
      <br />
      <div className="amenities-button">
        <button className="material-button">Show all 10 amenities</button>
      </div>
    </div>
  );
};

export default Amenities;
