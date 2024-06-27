import React, { useState } from 'react';
import "../../Static/CSS/login.css";
import { Link } from 'react-router-dom';



const Login = () => {

  return (
    <div className="container">
            <img src={require('../../Static/IMG/pizzabanner.png')} alt="BT Shop" className="img-fluid my-4 darken-img" />
            <div className="card login">
                <div className="card-body">
                    <h2 className="card-title login-title">Log In</h2>
                    <form>
                        <div className="login-content">
                            <div className="form-group">
                                <label htmlFor="user-name">User name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="user-name" required placeholder="ID/Email/Phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="password" required placeholder="********" />
                            </div>
                            <div className="form-group text-right">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="login-btn">
                                <button className="btn-login btn btn-primary">
                                    Log In
                                </button>
                            </div>
                        </div>
                        <div className="login-footer">
                            <h6>Sign in another way</h6>
                            <div className="form-group control-button">
                                <button type="button" className="btn btn-danger ">
                                    <i className="fab fa-google"></i> Google
                                </button>
                                <button type="button" className="btn btn-primary ">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </button>
                                <button type="button" className="btn btn-secondary ">
                                    <i className="fas fa-user"></i> Guest
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Login;
