import { useState } from 'react';
import ShareModal from './ShareModal'; // Ensure the path is correct to your ShareModal component

const PropertyTitleContainer = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className="property-title-container">
      <h1 className="title">Comfy New Apt. in Pueblo Libre!</h1>
      <div className="action-button-container">
        <div className="action-button" id="action-button-share" onClick={openShareModal}>
          <svg
            className="action-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 16v-8a8 8 0 0 1 16 0v8M4 16h16M4 16l3-3M20 16l-3-3" />
          </svg>
          <span className="action-text">Share</span>
        </div>
        <div
          className={`action-button ${isSaved ? 'saved' : ''}`}
          id="action-button-save"
          onClick={toggleSave}
        >
          <svg
            className="action-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
          <span className="action-text">Save</span>
        </div>
      </div>
      <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} />
    </div>
  );
};

export default PropertyTitleContainer;
