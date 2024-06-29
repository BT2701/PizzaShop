import React, { useState, useEffect, useRef, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'normalize.css';
import "../../Static/CSS/style.css";
import '../../Static/CSS/base-style.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../login-resigter/UserContext';
import axios from 'axios';
// import './base-style.css';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <header className="header-style">
      <div className="container-header">
        <div className="row d-flex align-items-center container-fluid">
          {/* Logo */}
          <div className="col-lg-4 col-6 web-logo">
            <a href="#">Pizza Shop</a>
          </div>

          {/* Search Bar */}
          <div className="col-lg-4 d-lg-block d-none search-bar">
            <div className="input-group">
              
            </div>
          </div>

          {/* Header operation */}
          <div className="col-lg-4 d-flex col-6 align-items-center justify-content-end header-operations">
            {/* User info */}
            <div className="d-none d-lg-flex header-operations_user-info">
              <a href="#" className="user-info_cart circle-bg-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>

              <div className="user-info_wrapper">
                <i className="fa-solid fa-user circle-bg-icon"></i>
                <span className="user-name">{user.ho+" " +user.ten}</span>

                <div className="user-actions">
                  <ul className="user-action_list">
                    <li className="user-action_list-item">
                      <a href="#">My account</a>
                    </li>
                    <li className="user-action_list-item">
                      <a href="#">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case width less than Ipad pro */}
            <ul className="d-flex d-lg-none list-unstyled m-0">
              <li className="search-hiden" onClick={() => console.log('Show search modal')}>
                <i className="fa-solid fa-magnifying-glass circle-bg-icon"></i>
                <div className="search-bar-hiden">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-list">
            <li className="nav-item">
              <a className="nav-link" href="/homepage" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to={'/products'} className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Bestseller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Contacts
              </a>
            </li>
            {/* Case user has been login */}
            <li className="nav-item d-lg-none d-flex align-items-center">
              <i className="fa-solid fa-user" style={{ color: 'aliceblue', marginRight: 10 }}></i>
              <a className="nav-link" href="#">
                Account name
              </a>
            </li>
            <li className="nav-item d-lg-none d-flex align-items-center">
              <i className="fa-solid fa-right-to-bracket" style={{ color: 'aliceblue', marginRight: 10 }}></i>
              <a className="nav-link" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

export default App;
