import Header from './Header';

const Work = ({ open, onClick }) => {
  return (
    <div>
      <Header open={open} onClick={onClick} />
      <h2>This is my Work Page</h2>;
    </div>
  );
};

export default Work;
