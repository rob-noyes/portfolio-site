import { Link } from 'react-router-dom';

const AboutDescription = () => {
  return (
    <div className="landing-container">
      <h2 className="home-heading">
        Hi, my name is <b>Rob</b>.
      </h2>
      <p className="descriptions">
        I'm a freelance front-end developer, focused on mobile-first, responsive
        development.
      </p>
      <Link to="/portfolio">
        <button className="main-button">View my work</button>
      </Link>
    </div>
  );
};

export default AboutDescription;
