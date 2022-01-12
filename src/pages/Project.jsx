import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import projects from '../data/projects.json';

function Project() {
  const location = useLocation();
  const project = projects.projects.project.filter(
    (proj) => proj.id === location.pathname.replace('/', '')
  );
  console.log(project);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='flex flex-col md:items-center justify-center px-4'
    >
      <AnimatePresence>
        {project.map((details) => (
          <motion.div
            exit={{ opacity: 0 }}
            className='flex flex-col md:items-center justify-center px-4'
          >
            <div className='py-20 max-w-2xl'>
              <div className='flex justify-between'>
                <h2 className='text-3xl font-medium pb-4 tracking-wide'>
                  {details.title}
                </h2>
                <a
                  href={details.githubhref}
                  className='text-3xl cursor-pointer px-4'
                >
                  <BsGithub fill='#333' />
                </a>
              </div>
              <p className=' text-secondary text-lg leading-relaxed tracking-wide'>
                {details.description}
              </p>
            </div>
            <div className='max-w-7xl justify-center flex flex-col'>
              <img className='hidden md:flex' src={details.imgSrc} alt='' />
              <span className='hidden md:flex text-sm pt-2'>
                {details.imgDesc}
              </span>
              <div className='flex flex-col py-4 md:hidden'>
                <img
                  src={details.imgSrcSmall}
                  alt=''
                  className='w-full md:max-w-sm md:pr-2'
                />
                <span className='text-sm'>{details.imgDescSmall}</span>
              </div>
              <div className='flex flex-col py-4 md:hidden'>
                <img
                  src={details.imgSrcSmall2}
                  alt=''
                  className='w-full md:max-w-sm md:pl-2'
                />
                <span className='text-sm'>{details.imgDescSmall2}</span>
              </div>
            </div>
            <div className='py-20 max-w-2xl text-lg'>
              <h2 className='text-3xl font-medium py-4 tracking-wide'>
                Learning
              </h2>
              <p>{details.learning1}</p>
              <p className='pt-4'>{details.learning2}</p>
            </div>
            <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>

            <div className='py-20 max-w-2xl text-lg'>
              <h2 className='text-3xl font-medium py-4 tracking-wide'>
                Features
              </h2>
              <ul className='flex flex-col gap-y-3 list-disc pl-5'>
                {details.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
            <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>
            <div className=' py-14 max-w-2xl text-lg'>
              <h2 className='text-3xl font-medium py-4 tracking-wide'>
                Skills
              </h2>
              <ul className='flex flex-wrap gap-x-1 text-lg'>
                {details.skills.map((skill) => (
                  <li>{skill} | </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 w-full border-t max-w-2xl border-secondary'></div>
            <div className='py-10 pb-20 max-w-2xl w-full text-lg'>
              <h2 className='text-3xl font-medium py-4 tracking-wide'>Demo</h2>
              <a className='text-blue-500 ' href={details.demo}>
                {details.demo}
              </a>
              <h2 className='text-2xl font-medium py-4 tracking-wide'>
                Github Repo:
              </h2>
              <a href={details.githubhref} className='text-blue-500'>
                {details.githubhref}
              </a>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default Project;
