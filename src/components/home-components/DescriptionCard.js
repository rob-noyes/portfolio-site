const DescriptionCard = ({ icon, title, text, className }) => {
  return (
    <div className={`description-card ${className}`}>
      <figure className="description-icon">{icon}</figure>
      <h2 className="headings">{title}</h2>
      <p className="descriptions">{text}</p>
    </div>
  );
};

export default DescriptionCard;
