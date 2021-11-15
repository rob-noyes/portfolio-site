import About from './About';
import Contact from './Contact';
import Header from './Header';
import AboutDescription from './home-components/AboutDescription';
import Description from './home-components/Description';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <>
      <Header />
      <div className="hello-container">
        <AboutDescription />
        <Description />
        <About />
      </div>
      <div id="project"></div>
      <div id="project-home-container">
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
