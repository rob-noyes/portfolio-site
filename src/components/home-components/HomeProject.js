import ProjectCard from './ProjectCard';

const portfolio = require('../../utilities/projects.json');

const HomeProject = () => {
  return (
    <div className="description-container">
      <div className="centering">
        <h2 className="home-title">Portfolio</h2>
        <div className="line"></div>
      </div>
      <div className="project-cards">
        {portfolio.Projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              src={project.images[0]}
              color={project.color}
              title={project.projectName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeProject;
