import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src="https://png.pngtree.com/png-clipart/20250416/original/pngtree-clothing-store-png-image_20700949.png"
          alt=""
          className="navbar-logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                About us
              </a> */}
              <NavLink to="/about-us" className="nav-link">
                About us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link"
                href="#"
                
              >
                Products
              </a> */}
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
