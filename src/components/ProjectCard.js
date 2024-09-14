import React from 'react';
import './ProjectCard.css';  // Assuming you have some CSS for styling

function ProjectCard({ title, date, imageUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default ProjectCard;