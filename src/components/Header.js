import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-container">
      <button className="hamburger-menu">
        <GrMenu onClick={() => setOpen(!open)} />
      </button>
      <Link to="/">
        <button className="header-button">Rob Noyes</button>
      </Link>
      <CSSTransition in={open} timeout={300} classNames="fade" unmountOnExit>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Header;
