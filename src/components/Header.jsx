import { useState } from 'react';
import SearchContainer from './SearchContainer';

function Header() {
  const [isExpandedSearchVisible, setIsExpandedSearchVisible] = useState(false);

  const toggleExpandedSearch = () => {
    setIsExpandedSearchVisible(prevState => !prevState);
  };

  return (
    <header className="site-header">
      <div className="header-main-content">
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
            <button className="search-button" onClick={toggleExpandedSearch}>&#128269;</button>
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
      </div>
      {isExpandedSearchVisible && <SearchContainer />}
    </header>
  );
}

export default Header;