import Skills from './about-components/Skills';
import Header from './Header';
import Contact from './home-components/Contact';

const About = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <div>
          <h2 className="about-heading">About Me</h2>
        </div>
        <Skills />
      </div>
      <Contact />
    </div>
  );
};

export default About;
