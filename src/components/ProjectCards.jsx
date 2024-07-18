import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <div className='project'>
    <Link to={project.link}>
      <img src={project.image} alt={project.title} />
    </Link>
    <div className='proj-description'>
      <br />
      <b>{project.title}</b>
      <p>{project.tags}</p>
      <p>{project.date}</p>
      <p>{project.description}</p>
      <Link to={project.link}>Go to Case Study</Link>
    </div>
  </div>
);

export default ProjectCard;
