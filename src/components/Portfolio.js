import Header from './Header';
import HomeProject from './home-components/HomeProject';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="hello-container">
        <div className="portfolio-container">
          <HomeProject />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
