// import './ImageGallery.css'; // Make sure to create a corresponding CSS file
import { useState } from 'react';
import Lightbox from './Lightbox';

const ImageGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg",
    "images/p4.jpg",
    "images/p5.jpg",
    "images/p6.jpg",
  ];
  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src="images/p1.jpg" alt="Main apartment view" />
      </div>
      <div className="thumbnail-container">
        <div className="thumbnail-grid">
          <img src="images/p2.jpg" alt="Thumbnail 2" />
          <img src="images/p3.jpg" alt="Thumbnail 3" />
          <img src="images/p4.jpg" alt="Thumbnail 4" />
          <div className="thumbnail-overlay">
            <img src="images/p5.jpg" alt="Thumbnail 5" />
            <button
              className="show-all-photos"
              onClick={() => setIsLightboxOpen(true)}
            >
              <span className="bed-icon">☷</span>
              Show all photos
            </button>
            <Lightbox
              images={images}
              isOpen={isLightboxOpen}
              onClose={() => setIsLightboxOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
