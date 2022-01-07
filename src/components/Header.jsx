import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <div className=''>
      <div
        className={`
          ${
            menu ? 'absolute top-0 w-5/6 h-screen left-0' : 'w-0'
          } bg-secondary transition-all transform duration-300`}
      >
        <ul
          className={
            menu
              ? 'pt-10 flex flex-col justify-center items-center text-3xl'
              : 'hidden text-3xl'
          }
        >
          <li className='py-4'>Home</li>
          <li className='py-4'>Projects</li>
          <li className='py-4'>About Me</li>
          <li className='py-4'>Contact</li>
        </ul>
      </div>
      <div
        className='
          flex justify-between items-center bg-tertiary'
      >
        <div
          className={`${
            menu ? ' fixed right-20 ' : ' flex right-96'
          } pl-5 transition-all transform duration-300 `}
        >
          <button onClick={menuControl}>{menu ? 'Close' : 'Menu'}</button>
        </div>
        <Link to='/'>
          <img
            src='/images/robNoyes.png'
            className='pr-5 w-44 cursor-pointer'
            alt=''
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
