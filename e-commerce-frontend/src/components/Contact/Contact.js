// Contact.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/Contact.css'; // Import file CSS riêng

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={require("../../Static/IMG/pizza-contact.png")} alt="Pizza Contact" />
      <div className="contact-content">
        <h3>CONTACT US</h3>
        <input type="text" className="form-control" placeholder="Name" />
        <input type="email" className="form-control" placeholder="Email" />
        <textarea
          className="form-control"
          id="contact-content-mess"
          rows="4"
          placeholder="Something..."
        ></textarea>
        <button className="btn btn-secondary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
