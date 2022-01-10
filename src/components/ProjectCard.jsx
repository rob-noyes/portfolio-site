import React from 'react';

function ProjectCard({ title, src, overview }) {
  return (
    <div>
      <img src={src} alt='' />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
}

export default ProjectCard;
