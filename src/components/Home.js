import Contact from './Contact';
import Header from './Header';
import AboutDescription from './home-components/AboutDescription';
import Description from './home-components/Description';
import HomeProject from './home-components/HomeProject';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <AboutDescription />
        <Description />
      </div>
      <div className="hello-container">
        <HomeProject />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
