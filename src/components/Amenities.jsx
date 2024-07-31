import PropTypes from "prop-types";

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
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Amenities;
