import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <nav className='bg-tertiary'>
      <div className='flex justify-between items-center m-auto h-14 shadow-lg max-w-5xl'>
        <button onClick={menuControl} className='pl-1 text-3xl sm:hidden'>
          <MdMenu />
        </button>
        <ul className='hidden sm:flex text-white'>
          <Link to='/'>
            <li className='px-2'>Projects</li>
          </Link>
          <Link to='/'>
            <li className='px-2'>About</li>
          </Link>
          <Link to='/'>
            <li className='px-2'>Contact</li>
          </Link>
        </ul>
        <Link className='w-44' to='/'>
          <img
            src='/images/robNoyes.png'
            className='pr-5 cursor-pointer'
            alt=''
          />
        </Link>
      </div>
      <div
        className={`${
          menu
            ? 'fixed mt-14 top-0 w-full h-32 z-10'
            : 'w-full h-0 fixed top-14'
        } bg-secondary transition-all transform duration-300 ease-in-out`}
      >
        <ul
          className={
            menu
              ? 'flex flex-col items-center text-lg h-full'
              : 'hidden text-lg'
          }
        >
          <li className='py-2'>Projects</li>
          <li className='py-2'>About Me</li>
          <li className='py-2'>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
