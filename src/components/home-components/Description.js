import DescriptionCard from './DescriptionCard';
import { FaBuffer } from 'react-icons/fa';
import { MdDevices, MdFlashOn } from 'react-icons/md';

const Description = () => {
  return (
    <div className="description-container">
      <div className="centering">
        <h2 className="home-title">About</h2>
        <div className="line"></div>
      </div>
      <div className="description-cards">
        <DescriptionCard
          icon={<MdFlashOn />}
          title="Fast"
          text="Fast load times and intuitive interaction is a high priorty for me."
          className="color-red"
        />
        <DescriptionCard
          icon={<MdDevices />}
          title="Responsive"
          text="My layouts are built to work on any device, from small to big."
          className="color-blue"
        />
        <DescriptionCard
          icon={<FaBuffer />}
          title="Dynamic"
          text="Sites don't always need to be static, I make pages come to life while feeling snappy."
          className="color-green"
        />
      </div>
    </div>
  );
};

export default Description;
