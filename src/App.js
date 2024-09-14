import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
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