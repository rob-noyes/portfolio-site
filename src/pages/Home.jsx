import ProjectCard from '../components/ProjectCard';
function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-primary text-head'>
      <div className='max-w-7xl pl-5 xl:pl-2'>
        <h2 className='py-third text-3xl font-bold sm:text-4xl lg:text-responsive  sm:pr-third lg:leading-normal '>
          Front End <span className='bg-head text-primary px-1'>Developer</span>{' '}
          focused on creating responsive, mobile-first sites and applications.
        </h2>
      </div>
      <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4'>
        <ProjectCard
          title='My Rewind'
          src=''
          href='https://myrewind.netlify.app/'
        />
        <div>Project Goes here</div>
        <div>Project Goes here</div>
      </div>
    </div>
  );
}

export default Home;
