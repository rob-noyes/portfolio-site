const DescriptionCard = ({ icon, title, text }) => {
  return (
    <div className="description-card">
      <figure className="description-icon">{icon}</figure>
      <h2 className="headings">{title}</h2>
      <p className="descriptions">{text}</p>
    </div>
  );
};

export default DescriptionCard;
