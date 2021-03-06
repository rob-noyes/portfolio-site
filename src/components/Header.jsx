import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <nav className='bg-primary sm:p-4'>
      <div className='flex justify-between items-center m-auto h-14 max-w-7xl'>
        <button onClick={menuControl} className='ml-1 p-2 text-3xl sm:hidden'>
          <MdMenu />
        </button>
        <ul className='hidden sm:flex text-secondary text-xl'>
          <li>
            <NavLink className='px-2' to='/'>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink className='px-2' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='px-2' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
        <Link className='w-44' to='/'>
          <img
            src='/images/logoNoyes.png'
            className='pr-5 cursor-pointer'
            alt=''
          />
        </Link>
      </div>
      <div
        className={`${
          menu
            ? 'absolute mt-14 top-0 w-full h-32 z-10 md:hidden'
            : 'w-full h-0 fixed top-14'
        } bg-primary text-secondary transition-height transform duration-300 ease-in-out`}
      >
        <ul
          className={
            menu
              ? 'transition-all duration-300 flex flex-col items-center text-lg h-full'
              : 'transition-all duration-300 flex flex-col items-center text-micro'
          }
        >
          <Link className='py-2' to='/'>
            <li onClick={menuControl}>Work</li>
          </Link>
          <Link className='py-2' to='/about'>
            <li onClick={menuControl}>About</li>
          </Link>
          <Link className='py-2' to='/contact'>
            <li onClick={menuControl}> Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
