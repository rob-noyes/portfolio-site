import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='max-w-7xl m-auto w-full flex flex-col justify-center leading-relaxed tracking-wide'
    >
      <div className='px-5 flex '>
        <h2 className='py-extra sm:pb-extra sm:py-third lg:pb-third text-3xl font-bold sm:text-4xl lg:text-responsive  sm:pr-third lg:leading-normal tracking-wide '>
          Creating engaging and intuitive front end websites and applications.{' '}
        </h2>
      </div>
      <div>
        <div className='flex justify-between flex-col md:flex-row px-5 pb-40'>
          <h2 className='text-2xl md:text-3xl font-medium pb-5 w-72'>
            Background
          </h2>
          <div>
            <p className='max-w-lg md:max-w-xl lg:max-w-2xl md:px-14 text-lg leading-relaxed tracking-wide pb-8'>
              I'm an independent front-end developer currently living and
              working in Portland, Oregon. Previously I worked as a Technology
              Evangelist at Apple from June 2021 - November 2021.
            </p>
            <a
              className='md:px-14 pt-14 hover:underline text-gray-500'
              href='https://www.linkedin.com/in/rnoyes/'
            >
              View my full resume
            </a>
          </div>
        </div>
        <div className='flex justify-between flex-col md:flex-row px-5 pb-40'>
          <h2 className='text-2xl md:text-3xl font-medium pb-5 w-72'>
            What I do
          </h2>
          <p className='max-w-lg md:max-w-xl lg:max-w-2xl md:px-14 text-lg leading-relaxed tracking-wide'>
            I develop and build interfaces, apps, and websites that are
            optimized for all devices and environments. In doing so, I bring
            straight-forward solutions to complex problems and deliver modern
            front end builds.
          </p>
        </div>
        <div className='flex justify-between flex-col md:flex-row px-5 pb-72 md:pb-96'>
          <h2 className='text-2xl md:text-3xl font-medium pb-5'>
            Areas of focus
          </h2>
          <ul className='max-w-lg md:max-w-xl lg:max-w-2xl md:px-14 text-lg leading-relaxed tracking-wide w-full'>
            <li>HTML / CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>TailwindCSS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
