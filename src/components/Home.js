import Header from './Header';
import DescriptionCard from './home-components/DescriptionCard';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="centering">
        <div>
          <h2 className="headings">Successful Front-End Development</h2>
          <p className="descriptions">
            Hi! I'm Rob, a freelance Front-end Developer creating mobile-first,
            responsible successful websites.
          </p>
        </div>
        <div>
          <DescriptionCard />
          <DescriptionCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
