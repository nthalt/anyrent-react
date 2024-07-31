import PropTypes from "prop-types";

const ShareModal = ({ isOpen, onClose }) => {
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Link copied to clipboard");
        alert("Link copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying link to clipboard: ", error);
      });
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "sharemodal") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="sharemodal" id="shareModal" onClick={handleOutsideClick}>
      <div className="sharemodal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Share this place</h2>
        <div className="property-preview">
          <img
            src="images/p1.jpg"
            alt="Property Image"
            style={{ height: "10%", width: "10%", size: "20%" }}
          />
          <h1 className="house-info">Entire rental unit in Lima, Peru</h1>
          <span className="rating">
            &#9733; <b>New</b>
          </span>
          <p className="subtitle">2 guests · 1 bedroom · 1 bed · 1 bath</p>
        </div>
        <div className="share-options">
          <button className="share-button" onClick={handleCopyLink}>
            <i className="icon-link"></i> Copy Link
          </button>
          <button className="share-button">
            <i className="icon-email"></i> Email
          </button>
          <button className="share-button">
            <i className="icon-messages"></i> Messages
          </button>
          <button className="share-button">
            <i className="icon-instagram"></i> Instagram
          </button>
          <button className="share-button">
            <i className="icon-messenger"></i> Messenger
          </button>
          <button className="share-button">
            <i className="icon-facebook"></i> Facebook
          </button>
          <button className="share-button">
            <i className="icon-twitter"></i> Twitter
          </button>
          <button className="share-button">
            <i className="icon-embed"></i> Embed
          </button>
        </div>
      </div>
    </div>
  );
};

ShareModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShareModal;
