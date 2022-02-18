import "./styles.css";
import CarImage from "assets/images/car-card.png";

const CarCard = () => {
  return (
    <div className="card-container-main">
      <div className="card-container">
        <div className="card-image-container">
          <img src={CarImage} alt="Car" />
        </div>
        <div className="card-text">
          <h3>Audi Supra TT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <div className="card-button-container">
            <button className="card-button">
              <a href="link">COMPRAR</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
