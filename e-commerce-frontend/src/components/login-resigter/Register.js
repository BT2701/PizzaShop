// Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../Static/CSS/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Register() {
  return (
    <div className="container-login-register">
        <img src={require("../../Static/IMG/pizzabanner.png")} alt="BT Shop" className="img-fluid my-4 darken-img" />
        <div className="card register">
            <div className="card-body">
                <h2 className="card-title login-title">Register</h2>
                <form>
                    <div className="login-content">
                        <div className="form-group">
                            <label htmlFor="user-name">Full name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="user-name" required placeholder="Nguyen Van A" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="email" required placeholder="abc@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sdt">Phone number <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="sdt" required placeholder="012345679" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="password" required placeholder="********" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Repeat password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="confirm-password" required placeholder="********" />
                        </div>
                        
                        <div className="login-btn">
                            <button className="btn-login btn btn-primary">
                                Create
                            </button>
                        </div>
                        <div className='form-group sign-up'>
                                <label>
                                Have an account?
                                </label>
                                <Link to={"/login"} className='text-danger'>Log in</Link>
                            </div>
                    </div>
                    <div className="login-footer">
                        <h6>Sign in another way</h6>
                        <div className="form-group control-button">
                            <button type="button" className="btn btn-danger">
                                <i className="fab fa-google"></i> Google
                            </button>
                            <button type="button" className="btn btn-primary">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <i className="fas fa-user"></i> Guest
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default Register;
