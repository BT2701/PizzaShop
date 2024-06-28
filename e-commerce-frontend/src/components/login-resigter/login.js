import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle, FaFacebookF, FaUser } from 'react-icons/fa';
import '../../Static/CSS/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container-login-register">
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
                            <div className="form-group text-end">
                                <Link to={"/forgot"}  className='text-primary'>Forgot password?</Link>
                            </div>
                            <div className="login-btn">
                                <Link to={"/homepage"} className="btn-login btn btn-primary">Log in</Link>
                            </div>
                            <div className='form-group sign-up'>
                                <label>
                                You're new to BT Shop, right?
                                </label>
                                <Link to={"/register"} className='text-danger'>Sign up</Link>
                            </div>
                        </div>
                        <div className="login-footer">
                            <h6>Sign in another way</h6>
                            <div className="form-group control-button">
                                <button type="button" className="btn btn-danger">
                                    <FaGoogle /> Google
                                </button>
                                <button type="button" className="btn btn-primary">
                                    <FaFacebookF /> Facebook
                                </button>
                                <button type="button" className="btn btn-secondary">
                                    <FaUser /> Guest
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
