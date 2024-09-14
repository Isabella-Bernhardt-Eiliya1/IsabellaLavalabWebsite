import React from 'react';
import './TopBar.css';

// defines TopBar component, includes a search bar and profile information
function TopBar() {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search in Aro" className="search-bar" />
      <div className="profile-info">
        <span className="profile-name">Cole Gawin</span>
        <span className="profile-email">colegawin@gmail.com</span>
      </div>
    </div>
  );
}

export default TopBar; 