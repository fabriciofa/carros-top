import "./styles.css";
import "bootstrap/js/dist/collapse";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light main-nav">
      <div className="container-fluid">
        <a href="link" className="navbar-logo-text">
          <h3>Carros Top</h3>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-carrostop"
          aria-controls="navbar-carrostop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-carrostop">
          <ul className="navbar-nav main-menu">
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
