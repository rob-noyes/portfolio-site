import Header from './Header';

const Main = ({ open, onClick }) => {
  return (
    <div className="">
      <Header open={open} onClick={onClick} />
      <h2>Hello World</h2>
      <p>
        Consequat elit ipsum deserunt id exercitation nulla duis magna voluptate
        laboris ex anim labore mollit. Pariatur sunt et sunt consectetur
        consectetur consectetur Lorem ea pariatur ipsum. Occaecat tempor
        incididunt voluptate amet labore qui ut laboris et laborum. Magna id sit
        commodo occaecat ad fugiat mollit culpa ex consequat qui magna nisi.
        Enim dolor officia enim fugiat do aliqua. Lorem duis voluptate in eu
        fugiat dolor laborum consectetur nisi labore. Deserunt cillum irure
        velit anim reprehenderit quis adipisicing.
      </p>

      <img
        src="url('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg')"
        alt=""
      ></img>
    </div>
  );
};

export default Main;
