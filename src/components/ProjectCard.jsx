import { Link } from 'react-router-dom';

function ProjectCard({ title, href, subTitle, src }) {
  return (
    <div className='w-full tracking-wider h-full '>
      <Link to={`/${title.toLowerCase().replace(' ', '')}`}>
        <img
          src={src}
          alt={title}
          className='opacity-90 hover:opacity-50 w-full object-cover'
        />
        <div className='flex text-base font-medium py-2 '>
          <h2>
            {title} - <span className='font-normal'>{subTitle}</span>
          </h2>
        </div>
        <span className='text-gray-700'>View Project</span>
      </Link>
    </div>
  );
}

export default ProjectCard;
