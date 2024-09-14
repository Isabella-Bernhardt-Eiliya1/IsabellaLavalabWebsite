import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';  // Assuming you have grid CSS for styling

function ProjectGrid() {
  const projects = [
    {
      title: 'Assignment 1',
      date: '1 min ago',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
    {
      title: 'Lab 3',
      date: '40 min ago',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
    {
      title: 'Workbook Ch. 3',
      date: '2 hours ago',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
    {
      title: 'Worksheet 2',
      date: 'Apr 25, 2024',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
    {
      title: 'Resume',
      date: 'March 27, 2023',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
    {
      title: 'Assignment 3',
      date: 'Feb 20, 2023',
      imageUrl: 'https://i.pinimg.com/originals/ce/0a/fe/ce0afe9c2950f4f53d22cf9613780cee.jpg',
    },
  ];

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          date={project.date}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;