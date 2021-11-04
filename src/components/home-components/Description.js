import DescriptionCard from './DescriptionCard';
import { FaBuffer } from 'react-icons/fa';
import { MdDevices, MdFlashOn } from 'react-icons/md';

const Description = () => {
  return (
    <div className="description-container">
      <div>
        <h2 className="home-title">About</h2>
        <div className="line"></div>
      </div>
      <DescriptionCard
        icon={<MdFlashOn />}
        title="Fast"
        text="A fast site is important, users shouldn't have to wait on things to load."
      />
      <DescriptionCard
        icon={<MdDevices />}
        title="Responsive"
        text="A site should be viewable on any platform, repsonsive sites allow for just that."
      />
      <DescriptionCard
        icon={<FaBuffer />}
        title="Dynamic"
        text="Content should be dynamic on a site, allowing for users to see changes happen."
      />
    </div>
  );
};

export default Description;
