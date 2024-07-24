import { useState } from 'react';
import WhereModal from './WhereModal';

const SearchContainer = () => {
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [destination, setDestination] = useState('Search destinations');

  const openWhereModal = () => {
    setIsWhereModalOpen(true);
    console.log('Opening Where Modal'); // Add this log
  };

  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
    console.log('Closing Where Modal'); // Add this log
  };

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
    closeWhereModal();
  };

  return (
    <div className="search-container">
      <div className="search-item where-btn" onClick={openWhereModal}>
        <span>Where</span>
        <strong>{destination}</strong>
      </div>
      {/* Other search items... */}
      <button className="search-button-hidden">Search</button>
      <WhereModal
        isOpen={isWhereModalOpen}
        onClose={closeWhereModal}
        onSelect={handleDestinationSelect}
      />
    </div>
  );
};

export default SearchContainer;