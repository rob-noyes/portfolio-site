import { Link } from 'react-router-dom';

function ProjectCard({ title, subTitle, src }) {
  return (
    <div className='w-full tracking-wider h-full '>
      <Link to={`/${title.toLowerCase().replace(' ', '')}`}>
        <img
          src={src}
          alt={title}
          className='opacity-90 hover:opacity-50 w-full'
        />
        <div className='flex text-base md:text-xl font-medium  py-2 '>
          <h2>
            {title} <span className='font-normal'>– {subTitle}</span>
          </h2>
        </div>
        <span className='text-gray-700 md:text-lg'>View Project</span>
      </Link>
    </div>
  );
}

export default ProjectCard;
