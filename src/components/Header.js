import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <button className="header-button">Rob Noyes</button>
    </div>
  );
};

export default Header;
