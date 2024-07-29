import PropTypes from "prop-types";
// import React from 'react';
// import './Amenities.css';

const Amenities = ({ amenities }) => {
  const amenityIcons = {
    "Wi-Fi": "📶",
    Fireplace: "🔥",
    "Hot tub": "♨️",
    "Hiking trails": "🥾",
    "Air conditioning": "❄️",
    Kitchen: "🍳",
    "Washing machine": "🧺",
    "Beach access": "🏖️",
    Parking: "🅿️",
    TV: "📺",
    "Swimming pool": "🏊",
    Gym: "🏋️",
    Elevator: "🛗",
    Balcony: "🏞️",
    "Pet-friendly": "🐾",
    "Smoke alarm": "🚨",
    "Carbon monoxide alarm": "⚠️",
    "First aid kit": "🩹",
    "Fire extinguisher": "🧯",
  };

  const getAmenityIcon = (amenity) => {
    return amenityIcons[amenity] || "•";
  };

  return (
    <div className="amenities">
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h3>What this place offers</h3>
      <br />
      <div className="amenities-list">
        {amenities.map((amenity, index) => (
          <div key={index}>
            {getAmenityIcon(amenity)} {amenity}
          </div>
        ))}
      </div>
      <br />
      <div className="amenities-button">
        <button className="material-button">
          Show all {amenities.length} amenities
        </button>
      </div>
    </div>
  );
};

Amenities.propTypes = {
  hotelData: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guest_count: PropTypes.number.isRequired,
    bedroom_count: PropTypes.number.isRequired,
    bathroom_count: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    host_information: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    address: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired, // Changed to string to match API response
    longitude: PropTypes.string.isRequired, // Changed to string to match API response
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        hotel_slug: PropTypes.string.isRequired,
        room_slug: PropTypes.string.isRequired,
        room_image: PropTypes.string.isRequired,
        room_title: PropTypes.string.isRequired,
        bedroom_count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Amenities;
