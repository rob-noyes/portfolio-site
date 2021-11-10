import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="social-buttons">
        <a href="mailto: robertjnoyes1@gmail.com">
          <MdEmail />
        </a>
        <a href="https://github.com/rob-noyes">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rnoyes/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
