import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ open, onClick }) => {
  return (
    <div className={open ? 'dim' : 'header-container'}>
      <button className="hamburger-menu" onClick={onClick}>
        <GiHamburgerMenu />
      </button>
      <button className={open ? 'hidden' : 'header-button'}>Rob Noyes</button>
      <ul className={open ? 'active-menu' : 'hidden'}>
        <li className="list-container">Work</li>
        <li className="list-container">Contact</li>
      </ul>
    </div>
  );
};
export default Header;
