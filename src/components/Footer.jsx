import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div className='flex justify-center items-center bg-tertiary py-4 gap-2'>
      <h3 className='text-white'>Developed by Rob Noyes</h3>
      <a href='https://github.com/rob-noyes'>
        <BsGithub className='text-lg' fill='#ffffff' />
      </a>
    </div>
  );
}

export default Footer;
