import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import './Lightbox.css'; // Make sure to create this CSS file based on the provided styles

const Lightbox = ({ images, initialIndex, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft" && currentImageIndex > 0) {
          setCurrentImageIndex((prev) => prev - 1);
        } else if (
          e.key === "ArrowRight" &&
          currentImageIndex < images.length - 1
        ) {
          setCurrentImageIndex((prev) => prev + 1);
        } else if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, currentImageIndex, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="lightbox"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="image-counter">{`${currentImageIndex + 1}/${
        images.length
      }`}</div>
      <div className="share-save">
        <button className="share-btn">⬆️</button>
        <button className="save-btn">♡</button>
      </div>
      <div className="lightbox-content">
        {currentImageIndex > 0 && (
          <button
            className="nav-btn prev-btn"
            onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
          >
            &lt;
          </button>
        )}
        <img
          src={images[currentImageIndex]}
          alt="Lightbox"
          className="lightbox-image"
        />
        {currentImageIndex < images.length - 1 && (
          <button
            className="nav-btn next-btn"
            onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  initialIndex: 0,
};

export default Lightbox;
