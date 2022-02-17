import Navbar from "components/Navbar";

import CarBannerImg from "assets/images/car-header.png";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-main-container">
        <div className="banner-main">
          <div className="banner-image">
            <img src={CarBannerImg} alt="Car Banner" />
          </div>
          <div className="banner-text">
            <h3>O carro perfeito para você</h3>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="banner-catalog">
          <div className="banner-catalog-button">
            <button>VER CATÁLOGO</button>
          </div>
          <div className="banner-catalog-text">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
