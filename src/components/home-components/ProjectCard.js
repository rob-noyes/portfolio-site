import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { MdArrowForwardIos } from 'react-icons/md';

const ProjectCard = ({ src, title, color, linkname }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="project-card"
    >
      <CSSTransition
        in={hover}
        timeout={200}
        classNames="project-caption"
        unmountOnExit
      >
        <div className="project-caption" style={{ background: color }}>
          <div></div>
          <h3 className="project-card-title">{title}</h3>
          <Link to={'/' + linkname}>
            <div className="view-button">
              <h3>View Project</h3>
              <MdArrowForwardIos />
            </div>
          </Link>
        </div>
      </CSSTransition>
      <img className="project-card-image" alt="" src={src}></img>
    </div>
  );
};

export default ProjectCard;
