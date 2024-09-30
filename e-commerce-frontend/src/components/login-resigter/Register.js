// Register.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../../Static/CSS/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import LoginModal from './Notification';
import axios from 'axios';



function Register() {
    const [fullname, setFullname]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [phone, setPhone]=useState(""); 
    const [repeat, setRepeat]=useState("");
    const [modalContent, setModalContent] = useState({ message: '', success: false });
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleRegister= async(event)=>{
        event.preventDefault();
        try {
            if(password===repeat){
                
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/register?fullname=`+fullname+"&email="+email+"&phone="+phone+"&password="+password);
                if(response.data){
                    setModalContent({ message: 'Register Successful!', success: true });
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                    
                }
                else{
                    setModalContent({ message: "Register Failed!", success: false });
                }
            }
            else{
                setModalContent({ message: "Passwords don't match!", success: false });
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setShowModal(true);
        }
        
    }
  return (
    <div className="container-login-register">
        <img src={require("../../Static/IMG/pizzabanner.png")} alt="BT Shop" className="img-fluid my-4 darken-img" />
        <div className="card register">
            <div className="card-body">
                <h2 className="card-title login-title">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="login-content">
                        <div className="form-group">
                            <label htmlFor="user-name">Full name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="user-name" required placeholder="Nguyen Van A" onChange={(e)=>setFullname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="email" required placeholder="abc@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sdt">Phone number <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="sdt" required placeholder="012345679" onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="password" required placeholder="********" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Repeat password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="confirm-password" required placeholder="********" onChange={(e)=>setRepeat(e.target.value)}/>
                        </div>
                        
                        <div className="login-btn">
                            <button className="btn-login btn btn-primary" type='submit'>
                                Create
                            </button>
                        </div>
                        <div className='form-group sign-up'>
                                <label>
                                Have an account?
                                </label>
                                <Link to={"/PizzaShop/login"} className='text-danger'>Log in</Link>
                            </div>
                    </div>
                    <div className="login-footer">
                        <h6>Sign in another way</h6>
                        <div className="form-group control-button">
                            <button type="button" className="btn btn-danger btn-socials">
                                <i className="fab fa-google"></i> Google
                            </button>
                            <button type="button" className="btn btn-primary btn-socials">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                            <button type="button" className="btn btn-secondary btn-socials">
                                <i className="fas fa-user"></i> Guest
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
}

export default Register;
