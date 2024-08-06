import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/base-style.css';
import "../../Static/CSS/style.css";

const Footer = () => {
  return (
    <footer className="bg-light py-4 footer">
      <div className="container">
        <div className="row">
          {/* Left Section - Social Media Icons */}
          <div className="col-md text-center mt-3 mb-4 footer_follow">
            <h5 className="footer_follow-title">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center mb-0 footer_follow-list">
              <li className="me-3 footer_follow-list-item">
                <a href="#" className="text-dark">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="me-3 footer_follow-list-item">
                <a href="#" className="text-dark">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="me-3 footer_follow-list-item">
                <a href="#" className="text-dark">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
              <li className="footer_follow-list-item">
                <a href="#" className="text-dark">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <hr className="d-md-none" style={{ width: '30%', margin: '0 auto' }} />

          {/* Center Section - Contact Section */}
          <div className="col-md text-center mt-md-3 mt-3 mb-4 footer_contact">
            <h5 className="footer_contact-title">Contact Us</h5>
            <ul className="list-unstyled mb-0 footer_contact-list">
              <li className="footer_contact-list-item">
                <i className="fa-solid fa-phone"></i> 0386094783
              </li>
              <li className="footer_contact-list-item">
                <i className="fa-regular fa-envelope"></i> btshop@gmail.com
              </li>
            </ul>
          </div>

          <hr className="d-md-none" style={{ width: '30%', margin: '0 auto' }} />

          {/* Right Section - Website Links */}
          <div className="col-md text-center mt-md-3 mt-3 mb-4 footer_explore">
            <h5 className="footer_explore-title">Explore</h5>
            <ul className="list-unstyled mb-0 footer_explore-list">
              <li className="footer_explore-list-item"><a href="#">Home</a></li>
              <li className="footer_explore-list-item"><a href="#">Products</a></li>
              <li className="footer_explore-list-item"><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      {/* Các component khác */}
      <Footer />
    </div>
  );
};

export default App;
