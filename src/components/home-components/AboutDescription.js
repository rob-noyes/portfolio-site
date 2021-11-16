const AboutDescription = () => {
  return (
    <div className="landing-container">
      <div className="landing-image"></div>
      <div className="landing">
        <h2 className="home-heading">
          Hi, my name is <b>Rob</b>.
        </h2>
        <p className="descriptions">
          I'm a <span className="about-bold">developer</span> and{' '}
          <span className="about-bold">designer</span> focused on front-end
          development, and I have been building on the web for the past two
          years. I specialize in responsive, dynamic sites without sacrificing
          creativity.
        </p>
        <a href="#project" id="button-ref">
          <button className="main-button">View my work</button>
        </a>
      </div>
    </div>
  );
};

export default AboutDescription;
