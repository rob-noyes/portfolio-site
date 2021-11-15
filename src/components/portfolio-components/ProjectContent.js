const ProjectContent = ({ src, description, text, title, link, tags }) => {
  return (
    <div className="project-content-container">
      <img className="image-container" src={src[0]} />
      <h2>{title}</h2>
      <span>{tags}</span>
      <a className="project-button" href={link}>
        View Demo
      </a>
      <p>{description}</p>
      <p>{text}</p>
    </div>
  );
};

export default ProjectContent;
