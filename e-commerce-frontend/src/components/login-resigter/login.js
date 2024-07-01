import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle, FaFacebookF, FaUser } from 'react-icons/fa';
import '../../Static/CSS/login.css';
import { Link } from 'react-router-dom';
import LoginModal from './Notification';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState([]);
    const [modalContent, setModalContent] = useState({ message: '', success: false });
    const [showModal, setShowModal] = useState(false);
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();
    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/login?username='+username+'&password='+password,{withCredentials: true});
            setAccount(response.data.user);
            if (response.data.length === 0) {
                setModalContent({ message: 'Login Failed!', success: false });
            } else {
                setUser(response.data.user);
                setModalContent({ message: 'Login Succeeded!', success: true });
                setTimeout(() => {
                    navigate('/homepage');
                }, 2000);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setShowModal(true);
        }
    };

    return (
        <div className="container-login-register">
            <img src={require('../../Static/IMG/pizzabanner.png')} alt="BT Shop" className="img-fluid my-4 darken-img" />
            <div className="card login">
                <div className="card-body">
                    <h2 className="card-title login-title">Log In</h2>
                    <form onSubmit={login}>
                        <div className="login-content">
                            <div className="form-group">
                                <label htmlFor="user-name">User name <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user-name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder="Username/Email/Phone number"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="********"
                                />
                            </div>
                            <div className="form-group text-end">
                                <Link to={"/forgot"} className='text-primary'>Forgot password?</Link>
                            </div>
                            <div className="login-btn">
                                <button className="btn-login btn btn-primary" type="submit">Log in</button>
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
                                <button type="button" className="btn btn-danger btn-socials">
                                    <FaGoogle /> Google
                                </button>
                                <button type="button" className="btn btn-primary btn-socials">
                                    <FaFacebookF /> Facebook
                                </button>
                                <button type="button" className="btn btn-secondary btn-socials">
                                    <FaUser /> Guest
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LoginModal
                show={showModal}
                onHide={() => setShowModal(false)}
                content={modalContent}
            />
        </div>
    );
};

export default Login;
