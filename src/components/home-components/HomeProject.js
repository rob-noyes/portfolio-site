import ProjectCard from './ProjectCard';

const portfolio = require('../../utilities/projects.json');

const HomeProject = () => {
  return (
    <div className="description-container">
      <div className="centering">
        <h2 id="home-title">Portfolio</h2>
        <div className="line"></div>
      </div>
      <div id="project-cards">
        {portfolio.Projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              src={project.images[0]}
              color={project.color}
              title={project.projectName}
              linkname={project.linkname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeProject;
