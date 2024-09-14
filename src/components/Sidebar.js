import React from 'react';
import './Sidebar.css'; // imports CSS file for styling

// defines the sidebar component
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>ARO</h2>
      </div>
      <ul className="sidebar-menu">
        <li>All projects</li>
        <li>Your projects</li>
        <li>Shared with you</li>
        <li>Archived</li>
        <li>Trash</li>
      </ul>
      <button className="new-project-button">+ New</button>
    </div>
  );
}

export default Sidebar;