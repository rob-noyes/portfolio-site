import Header from './Header';
import ProjectContent from './portfolio-components/ProjectContent';

const portfolio = require('../utilities/projects.json');

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <div className="portfolio-container">
          <h2>Portfolio</h2>
          <div className="line"></div>
        </div>
        <div>
          {portfolio.Projects.map((project) => {
            return (
              <ProjectContent
                key={project.id}
                src={project.images}
                description={project.description}
                text={project.Content}
                title={project.projectName}
                link={project.link}
                tags={project.tags}
                alt={project.alt}
                github={project.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
