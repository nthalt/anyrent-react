// src/components/SearchContainer.jsx
import React, { useState } from 'react';
import WhereModal from './WhereModal'; // We'll create this component separately

const SearchContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [destination, setDestination] = useState('Search destinations');

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const openWhereModal = () => {
    setIsWhereModalOpen(true);
  };

  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
  };

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
    closeWhereModal();
  };

  return (
    <>
      <div className={`search-container ${isExpanded ? 'expanded' : ''}`}>
        <div className="search-item where-btn" onClick={openWhereModal}>
          <span>Where</span>
          <strong>{destination}</strong>
        </div>
        <div className="search-item" id="check-in-btn">
          <button>Check in</button>
          <strong>Add dates</strong>
        </div>
        <div className="search-item" id="check-out-btn">
          <button>Check out</button>
          <strong>Add dates</strong>
        </div>
        <div className="search-item" id="addguest-btn">
          <span>Who</span>
          <strong>Add guests</strong>
        </div>
        <button className="search-button-hidden">Search</button>
      </div>

      {isWhereModalOpen && (
        <WhereModal onClose={closeWhereModal} onSelect={handleDestinationSelect} />
      )}
    </>
  );
};

export default SearchContainer;