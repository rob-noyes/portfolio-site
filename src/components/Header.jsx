import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <div className=''>
      <div
        className={
          menu
            ? ' bg-secondary fixed top-0 left-0 w-screen h-screen transition-all transform duration-300 '
            : 'transition-all transform duration-300'
        }
      >
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className='flex justify-between items-center   bg-tertiary'>
        <div className={menu ? '  fixed right-5 ' : 'flex'}>
          <button onClick={menuControl}>Menu</button>
        </div>
        <Link to='/'>
          <img
            src='/images/robNoyes.png'
            className='w-44 cursor-pointer'
            alt=''
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
