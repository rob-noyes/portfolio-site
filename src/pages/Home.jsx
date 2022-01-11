import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='flex flex-col justify-center items-center w-full bg-primary text-head '
    >
      <div className='max-w-7xl pl-5 xl:pl-2'>
        <h2 className='py-extra sm:pb-extra sm:py-third lg:pb-third text-3xl font-bold sm:text-4xl lg:text-responsive  sm:pr-third lg:leading-normal tracking-wide '>
          Front End <span className='bg-head text-primary px-1'>Developer</span>{' '}
          focused on creating responsive, mobile-first sites and applications.
        </h2>
      </div>
      <div className='max-w-7xl pb-40 grid px-4 grid-cols-1 gap-20 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3'>
        <ProjectCard
          title='My Rewind'
          subTitle='Movie Search'
          src='/images/projects/myRewind/MyRewindCardv2.png'
          href='https://myrewind.netlify.app/'
        />
        <ProjectCard
          title='Room'
          subTitle='eCommerce Site'
          src='/images/projects/room/roomCard.png'
        />
        <ProjectCard
          title='Tip Jar'
          subTitle='Calculate your tip'
          src='/images/projects/tipjar/tipjarCard.png'
        />
        <ProjectCard
          title='Cast'
          subTitle='Weather tracking'
          src='/images/projects/cast/castCard.png'
        />
      </div>
      <div className='flex flex-col items-start w-full px-4 justify-between sm:items-center sm:flex-row max-w-7xl m-auto pb-40 tracking-wide'>
        <div>
          <h2 className='text-3xl font-semibold pb-1'>Let's work together.</h2>
          <p className='text-lg tracking-wide'>
            Open to talking about new opportunites.
          </p>
        </div>
        <div className='pt-10 sm:pt-0 '>
          <button className='border-secondary rounded-lg border-2 py-3 px-6 text-lg font-semibold hover:text-primary hover:bg-secondary tracking-wide'>
            GET IN TOUCH
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
