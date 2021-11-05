const ProjectCard = ({ src, title, text, link }) => {
  return (
    <div className="project-card">
      <img className="project-card-image" src={src}></img>
      <h3>Project One</h3>
      <p>Text For Project One </p>
    </div>
  );
};

export default ProjectCard;
