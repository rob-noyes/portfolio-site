import Contact from './Contact';
import Header from './Header';
import ProjectContent from './portfolio-components/ProjectContent';

const portfolio = require('../utilities/projects.json');

const Portfolio = () => {
  return (
    <div className="portfolio-background">
      <Header />
      <div className="portfolio-container">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
          <div className="project-line"></div>
        </div>
        <div>
          {portfolio.Projects.map((project) => {
            return (
              <ProjectContent
                key={project.id}
                src={project.images}
                description={project.description}
                text={project.Content}
                text2={project.Content2}
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
      <Contact />
    </div>
  );
};

export default Portfolio;
