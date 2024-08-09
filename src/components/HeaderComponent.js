import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components/HeaderComponent.css';
import logo from '../utils/company-logo.png';

const HeaderComponent = () => {
  return (
    <header className="header-area">
      <div className="top-bar py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-4 d-flex align-items-center">
              <a href="/">
                <img src={logo} alt="company-logo" className="img-fluid header-logo" />
              </a>
            </div>
            <div className="col-md-8">
              <ul className="list-inline mb-0 text-center contact-info">
                <li className="list-inline-item me-4">
                  <i className="bi bi-geo-alt"></i> 05 kandi BR, New York
                </li>
                <li className="list-inline-item me-4">
                  <i className="bi bi-envelope"></i> info@yourmail.com
                </li>
                <li className="list-inline-item">
                  <i className="bi bi-phone"></i> +019988772
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">Services</a>
                </li>
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">Pages</a>
                </li>
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item px-3"> {/* Adjusted spacing */}
                  <a className="nav-link" href="/">Contact</a>
                </li>
              </ul>
              <div className="social-icons d-none d-md-flex">
                <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="me-2"><i className="bi bi-pinterest"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
