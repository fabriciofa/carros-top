import CarCard from "components/CarCard";
import Navbar from "components/Navbar";
import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div className="searchbox-container">
        <div className="searchbox">
          <input
            className="searchbox-field"
            type="text"
            name="searchbox-field"
            id="searchbox-id"
            placeholder="Digite sua busca"
          />
          <button className="searchbox-button">
            <span>BUSCAR</span>
          </button>
        </div>
      </div>
      <div className="container-fluid px-2">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
