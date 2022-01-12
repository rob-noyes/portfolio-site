import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='max-w-7xl m-auto w-full flex flex-col items-center justify-center'
    >
      <div className='px-5 flex'>
        <h2 className=' max-w-4xl py-extra sm:pb-extra sm:py-third lg:pb-third text-3xl font-bold sm:text-4xl lg:text-responsive lg:leading-normal tracking-wide text-center '>
          Get in touch with me about new opportunites or just to say hello.{' '}
        </h2>
      </div>
      <div className=''>
        <div className='flex justify-center flex-col px-5 pb-20 text-xl'>
          <div className='py-14'>
            <h2 className=' py-3 text-tertiary'>Availability</h2>
            <p>Available to new opportunities</p>
          </div>
          <div>
            <h2 className=' pb-3 text-tertiary'>Email</h2>
            <a
              href='mailto: robertjnoyes1@gmail.com'
              className=' text-blue-500 hover:underline'
            >
              robertjnoyes1@gmail.com
            </a>
          </div>
          <div className='py-14'>
            <h2 className=' pb-3 text-tertiary'>Follow</h2>

            <a
              href='https://www.linkedin.com/in/rnoyes/'
              className='  hover:underline'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/rob-noyes'
              className='hover:underline block'
            >
              Github
            </a>
            <a
              href='https://twitter.com/RobWideWeb'
              className='hover:underline block'
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
