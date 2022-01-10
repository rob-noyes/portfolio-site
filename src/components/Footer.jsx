import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

function Footer() {
  return (
    <div className='flex flex-col justify-center items-start bg-secondary text-primary gap-8 px-4 text-sm py-third'>
      <div>
        <h3>
          <span className='font-semibold'>Rob Noyes</span> - Front End Developer
        </h3>
        <h4>robertjnoyes1@gmail.com</h4>
      </div>
      <div className='flex items-center gap-2 text-lg'>
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
  );
}

export default Footer;
