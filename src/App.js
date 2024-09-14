import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ProjectGrid from './components/ProjectGrid';

// function for App component acting as the layout for the website
function App() {
  return (
    // container for all application components
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <ProjectGrid />
      </div>
    </div>
  );
}

export default App;