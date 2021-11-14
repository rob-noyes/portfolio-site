import Bio from './about-components/Bio';
import Skills from './about-components/Skills';
import Header from './Header';
import Contact from './home-components/Contact';

const About = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <Bio />
        <Skills />
      </div>
      <Contact />
    </div>
  );
};

export default About;
