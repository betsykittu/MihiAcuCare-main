import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  
  const location = useLocation();

  return (
    <div>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <Link to="/">
                  Mihi AcuCare<span className="text-primary">.</span>
                </Link>
              </div>
            </div>
            <div className="col-9 text-right">
              <span className="d-inline-block d-lg-none">
                <Link to="#" className="site-menu-toggle js-menu-toggle py-5">
                  <span className="icon-menu h3 text-white" />
                </Link>
              </span>
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className={location.pathname === "/services" ? "active" : ""}>
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className={location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
