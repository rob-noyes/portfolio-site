import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Contact from '../Contact';
import Work from '../Work';

const MenuList = ({ open, onClick }) => {
  return (
    <ul className={open ? 'active-menu' : 'hidden'}>
      <Link to="/work" onClick={onClick}>
        Work
      </Link>
      <Link to="/contact" onClick={onClick}>
        Contact
      </Link>
    </ul>
  );
};

export default MenuList;
