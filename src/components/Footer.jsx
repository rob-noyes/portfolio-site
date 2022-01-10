import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

function Footer() {
  return (
    <div className=' bg-secondary text-primary px-4 pt-third pb-third md:pb-44 md:pt-32 sm:px-10 '>
      <div className='flex flex-col justify-center items-start gap-8  sm:flex-row sm:justify-between max-w-7xl m-auto'>
        <div className='text-lg leading-loose'>
          <h3 className=''>
            <span className='font-semibold'>Rob Noyes</span> - Front End
            Developer
          </h3>
          <h4>robertjnoyes1@gmail.com</h4>
        </div>
        <div className='flex items-center gap-3 text-2xl'>
          <a href='https://github.com/rob-noyes'>
            <BsGithub fill='#fff' />
          </a>
          <a href='https://www.linkedin.com/in/rnoyes/'>
            <BsLinkedin fill='#fff' />
          </a>
          <a href='https://twitter.com/RobWideWeb'>
            <AiFillTwitterCircle fill='#fff' />
          </a>
        </div>
      </div>
      <div className='pt-16 text-lg max-w-7xl m-auto'>
        <ul className='flex flex-row pb-10 gap-8'>
          <li>
            <Link to='/'>Work</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <span className='text-base text-tertiary'>
          © Copyright 2022, Rob Noyes
        </span>
      </div>
    </div>
  );
}

export default Footer;
