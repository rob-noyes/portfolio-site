import Header from './Header';
import AboutDescription from './home-components/AboutDescription';
import Description from './home-components/Description';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <AboutDescription />
        <Description />
      </div>
    </div>
  );
};

export default Home;
