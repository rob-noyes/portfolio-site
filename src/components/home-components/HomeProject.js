import ProjectCard from './ProjectCard';

const HomeProject = () => {
  return (
    <div className="description-container">
      <div className="centering">
        <h2 className="home-title">Portfolio</h2>
        <div className="line"></div>
      </div>
      <div className="project-cards">
        <ProjectCard src="/images/projects/room/desktop1.png" />
      </div>
    </div>
  );
};

export default HomeProject;
