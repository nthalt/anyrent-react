import React, { useState } from 'react';

function Header() {
  const [isExpandedSearchVisible, setIsExpandedSearchVisible] = useState(false);

  const toggleExpandedSearch = () => {
    setIsExpandedSearchVisible(!isExpandedSearchVisible);
  };

  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="search-bar">
          <button id="anywhere-btn" onClick={toggleExpandedSearch}>Anywhere</button>
          <button id="anyweek-btn" onClick={toggleExpandedSearch}>Any week</button>
          <input 
            type="text" 
            id="guests-input-btn" 
            placeholder="Add guests" 
            onClick={toggleExpandedSearch}
          />
          <button className="search-button">&#128269;</button>
        </div>
      </nav>
      <div className="logo">
        <img src="/images/globe.png" alt="Site Logo" />
      </div>
      <div className="user-menu">
        <button className="profile-button">
          <span className="menu-icon">&#9776;</span>
          <span className="profile-icon">&#128100;</span>
        </button>
      </div>
      {isExpandedSearchVisible && (
        <div className="search-container">
          {/* Add your expanded search content here */}
        </div>
      )}
    </header>
  );
}

export default Header;