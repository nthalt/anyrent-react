import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Lightbox from "./Lightbox";
import config from "../config";
// import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    console.log("Received images:", images);

    const processedImages = images.map((img) => `${config.apiBaseUrl}${img}`);
    while (processedImages.length < 5) {
      processedImages.push(processedImages[processedImages.length - 1] || "");
    }

    console.log("Processed images:", processedImages);
    setDisplayImages(processedImages);
  }, [images]);

  if (displayImages.length === 0) {
    return <div>Loading images...</div>;
  }

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img
          src={displayImages[0]}
          alt="Main view"
          onError={(e) => console.error("Error loading image:", e.target.src)}
        />
      </div>
      <div className="thumbnail-container">
        <div className="thumbnail-grid">
          {displayImages.slice(1, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 2}`}
              onError={(e) =>
                console.error("Error loading image:", e.target.src)
              }
            />
          ))}
          <div className="thumbnail-overlay">
            <img
              src={displayImages[4]}
              alt="Thumbnail 5"
              onError={(e) =>
                console.error("Error loading image:", e.target.src)
              }
            />
            <button
              className="show-all-photos"
              onClick={() => setIsLightboxOpen(true)}
            >
              <span className="bed-icon">☷</span>
              Show all photos
            </button>
            <Lightbox
              images={displayImages}
              isOpen={isLightboxOpen}
              onClose={() => setIsLightboxOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
