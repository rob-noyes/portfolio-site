const ProjectContent = ({
  src,
  description,
  text,
  text2,
  title,
  link,
  tags,
  alt,
  github,
}) => {
  return (
    <div className="project-content-container">
      <img className="image-container" src={src[0]} alt={alt} />
      <h2 className="project-content-title">{title}</h2>
      <span>{tags}</span>
      <a className="project-button" href={link}>
        View Demo
      </a>
      <p className="project-content-para">{description}</p>
      <p className="project-content-para">{text}</p>
      <p className="project-content-para">{text2}</p>
      <a className="project-button" href={github}>
        View on Github
      </a>
    </div>
  );
};

export default ProjectContent;
