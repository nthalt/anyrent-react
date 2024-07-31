import PropTypes from "prop-types";

const WhereModal = ({ isOpen, onClose, onSelect }) => {
  const regions = [
    { name: "I'm flexible", image: "images/world-map.png" },
    { name: "Southeast Asia", image: "images/southeast-asia-map.png" },
    { name: "Canada", image: "images/canada-map.png" },
    { name: "Europe", image: "images/europe-map.png" },
    { name: "Thailand", image: "images/thailand-map.png" },
    { name: "Middle East", image: "images/middle-east-map.png" },
  ];

  const handleRegionClick = (regionName) => {
    onSelect(regionName);
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div id="whereModal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Search by region</h2>
        <div className="region-grid">
          {regions.map((region, index) => (
            <div
              key={index}
              className="region-item"
              onClick={() => handleRegionClick(region.name)}
            >
              <img src={region.image} alt={region.name} />
              <p>{region.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

WhereModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default WhereModal;
