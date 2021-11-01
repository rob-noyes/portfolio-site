import { GiHamburgerMenu } from 'react-icons/gi';
import MenuList from './header/MenuList';
import { Link, Router } from 'react-router-dom';

const Header = ({ open, onClick }) => {
  return (
    <div className={open ? 'dim' : 'header-container'}>
      <button className="hamburger-menu" onClick={onClick}>
        <GiHamburgerMenu />
      </button>

      <Link to="/">
        <button className={open ? '' : 'header-button'}>Rob Noyes</button>
      </Link>
      <MenuList open={open} onClick={onClick} />
    </div>
  );
};
export default Header;
