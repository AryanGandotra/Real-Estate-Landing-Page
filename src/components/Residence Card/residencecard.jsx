import "./residencecard.css";

const ResidenceCard = (residence) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={residence.residence.img} alt="" />
      </div>
      <div className="card-info">
        <h1 className="card-heading">{residence.residence.name}</h1>
        <h3 className="card-subheading">{residence.residence.location}</h3>
        <div className="card-description">{residence.residence.description}</div>
        <div className="card-price">
          <h3 className="card-price-heading">Price</h3>
          <h3 className="card-price-value">{residence.residence.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResidenceCard;
