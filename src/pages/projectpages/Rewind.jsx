import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

function Rewind() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='flex flex-col md:items-center justify-center px-4'
    >
      <div className='py-20 max-w-2xl'>
        <div className='flex justify-between'>
          <h2 className='text-3xl font-medium pb-4 tracking-wide'>My Rewind</h2>
          <a
            href='https://github.com/rob-noyes/myrewind'
            className='text-3xl cursor-pointer px-4'
          >
            <BsGithub fill='#333' />
          </a>
        </div>
        <p className=' text-secondary text-lg leading-relaxed tracking-wide'>
          Movies have always been a favorite hobby of mine to watch, and I have
          found that the big sites to look up information about them are bloated
          and have too many ads pushed towards you. MyRewind is a creation out
          of passion for cinema lovers like myself, to allow for quick and easy
          access to the details of a movie without the bloat of ads or slow
          responsiveness.
        </p>
      </div>
      <div className='max-w-7xl justify-center flex flex-col'>
        <img
          className='hidden md:flex'
          src='/images/projects/myRewind/wide.png'
          alt=''
        />
        <span className='text-sm pt-2'>Home page & Movie page</span>
        <div className='flex flex-col md:hidden'>
          <img
            src='/images/projects/myRewind/myrewindhomepage.png'
            alt=''
            className='w-full md:max-w-sm md:pr-2'
          />
          <span className='text-sm'>Homepage</span>
        </div>
        <div className='flex flex-col md:hidden'>
          <img
            src='/images/projects/myRewind/myrewindMoviePage.png'
            alt=''
            className='w-full md:max-w-sm md:pl-2'
          />
          <span className='text-sm'>Movie Page</span>
        </div>
      </div>
      <div className='py-20 max-w-2xl text-lg'>
        <h2 className='text-3xl font-medium py-4 tracking-wide'>Description</h2>
        <p>
          This project was one of the largest I have worked on, and something
          that will continue to be developed. That hardest lesson here was
          utilizing the APIs to display the data, and how to use state
          management with react-router-dom, as well as useEffect with the API.
          The biggest success was getting the search to work with the movie API,
          as it was difficult to get the movie ID to match when clicking on a
          specific movie.
        </p>
        <p className='pt-4'>
          This was a breakthrough for me understanding CSS on a deeper level. I
          utilized Figma as a way to learn how to develop my style and UI before
          delving into the project code. TailwindCSS also came in handy here as
          it made it so much easier to inject the JSX with tailwind, keeping
          everything within the component files instead of moving to a
          stylesheet and utilizing specific classes.
        </p>
      </div>
      <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>

      <div className='py-20 max-w-2xl'>
        <h2 className='text-3xl font-medium py-4 tracking-wide'>Features</h2>
        <ul className='flex flex-col gap-y-3 list-disc pl-5'>
          <li>
            Browse Top Rated, Upcoming, and Popular movies on the home page.
          </li>
          <li>
            Each movie has its own dedicated page with details and credits, just
            click on the title or image.
          </li>
          <li>
            Search any movie within the database to see a more in depth look
            with search icon.
          </li>
          <li>
            Check out lists of Top Rated and Now playing Movies on unique pages
            using hamburger menu.
          </li>
          <li>
            Responsive mobile-first design approach, working on phones, tablets,
            and desktops.
          </li>
        </ul>
      </div>
      <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>
      <div className=' py-14 max-w-2xl'>
        <h2 className='text-3xl font-medium py-4 tracking-wide'>Skills</h2>
        <ul className='flex flex-wrap gap-x-1 text-lg'>
          <li>Javascript | </li>
          <li>React | </li>
          <li>React-router-dom | </li>
          <li>React-icons | </li>
          <li>API - TMDB | </li>
          <li>TailwindCSS | </li>
          <li>NPM/Webpack | </li>
          <li>Git/Github</li>
        </ul>
      </div>
      <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>

      <div className='py-10 pb-20 max-w-2xl w-full'>
        <h2 className='text-3xl font-medium py-4 tracking-wide'>Demo</h2>
        <a className='text-blue-500 ' href='https://myrewind.netlify.app/'>
          https://myrewind.netlify.app/
        </a>
        <h2 className='text-2xl font-medium py-4 tracking-wide'>
          Github Repo:
        </h2>
        <a
          href='https://github.com/rob-noyes/myrewind'
          className='text-blue-500'
        >
          https://github.com/rob-noyes/myrewind
        </a>
      </div>
    </motion.div>
  );
}

export default Rewind;
