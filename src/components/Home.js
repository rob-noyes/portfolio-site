import Header from './Header';
import DescriptionCard from './home-components/DescriptionCard';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <h2 className="home-heading">
          Hi, my name is <b>Rob</b>.
        </h2>
      </div>
      <div className="home-about">
        <h3>Freelance Front-end Developer</h3>
      </div>
    </div>
  );
};

export default Home;
