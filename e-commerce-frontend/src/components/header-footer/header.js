import React, { useState, useEffect, useRef, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'normalize.css';
import "../../Static/CSS/style.css";
import '../../Static/CSS/base-style.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../login-resigter/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useCart } from '../cart/CartContext';
// import './base-style.css';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showModal, setShowModal]= useState(false);
    const handleCloseModal= ()=>setShowModal(false);
    const handleOpenModal=()=>setShowModal(true);
    const [details, setDetails]= useState([]);
    const [numOfCart, setNumOfCart]= useState(0);
    const { cartCount } = useCart();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/session`, { withCredentials: true });                
                if (response.data.authenticated) {
                    setUser(response.data.user);
                } else {
                    navigate('/PizzaShop/login'); // Chuyển hướng đến trang đăng nhập nếu không xác thực
                }
            } catch (error) {
                console.error('Error checking session:', error);
            } finally {
                setLoading(false);
            }
        };
        const checkCart= async()=>{
          try {
            const cartData= await axios.get(`${process.env.REACT_APP_API_URL}/cart`,{withCredentials: true});
                if(cartData.data){
                  setNumOfCart(cartData.data.count);
                  setDetails(cartData.data.details);
                }
                else{
                  console.error("undefine data");
                }
          } catch (error) {
            console.error('undefine detail list for cart', error);
          }
        }

        checkSession();
        checkCart();
    }, [setUser, navigate, cartCount]);
  
  return (
    <header className="header-style">
      <div className="container-header">
        <div className="row d-flex align-items-center container-fluid">
          {/* Logo */}
          <div className="col-lg-4 col-6 web-logo">
            <Link to={'/PizzaShop/homepage'}><i class="fa-solid fa-pizza-slice mr-2 header-icon-shop"></i>BT SHOP</Link>
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
              <button className="user-info_cart circle-bg-icon" onClick={handleOpenModal}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className='cart-circle-total'>
                  <span>{numOfCart}</span>
                </div>
              </button>

              <div className="user-info_wrapper">
                <i className="fa-solid fa-user circle-bg-icon"></i>
                <span className="user-name">{user?.ho + " " + user?.ten}</span>

                <div className="user-actions">
                  <ul className="user-action_list">
                    <li className="user-action_list-item">
                      <Link to={"/PizzaShop/profile"} className="nav-link">Profile</Link>
                    </li>
                    <li className="user-action_list-item">
                      <Link to={"/PizzaShop/login"} className="nav-link">Log out</Link>
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
      <Cart show={showModal} handleClose={handleCloseModal} details={details}/>
    </header>
  );
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
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
            <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
              <Link className="nav-link" to={'/PizzaShop/homepage'} >
                <i class="fa-solid fa-house mr-2"></i>
                Trang chủ
              </Link>
            </li>
            <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
              <Link to={'/PizzaShop/products'} className="nav-link">
              <i class="fa-solid fa-pizza-slice mr-2"></i>Sản phẩm</Link>
            </li>
            <li className={`nav-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
              <Link className="nav-link" to={'/PizzaShop/contact'}>
              <i class="fa-solid fa-phone mr-2"></i>
              Liên hệ
              </Link>
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
              <Link to={"/PizzaShop/login"} className="nav-link">Log out</Link>
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
