import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/OrderHistory.css';
import { Link } from 'react-router-dom';
import OrderDetail from './OrderDetail';

const OrderHistory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className='container-history-main'>
      <div className="history-container">
        <div className="history-header">
          <Link to={"/profile"} className="btn"><i className="fa-solid fa-chevron-left"></i></Link>
          <h2>Order History</h2>
        </div>
        <div className="history-content">
          <div className="history-content-box">
            <div className="history-content-box-top">
              <div className="history-content-box-top-code">
                <label>Code: </label>
                <li>001</li>
              </div>
              <span>Received</span>
            </div>
            <div className="history-content-box-mid">
              <div className="history-content-box-mid-left">
                <img src={require('../../Static/IMG/SanPham/pizza0.png')} alt="Pizza Shop" />
              </div>
              <div className="history-content-box-mid-center">
                <h4>Pizza vip <span>and 3 others</span></h4>
                <li>Date: <span>1/1/2024</span></li>
                <button className='btn' onClick={handleOpenModal}>View details</button>
              </div>
              <div className="history-content-box-mid-right">
                <span className="text-danger">80.000VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderDetail mahd={1} show={showModal} handleClose={handleCloseModal}/>
      </div>
  );
};

export default OrderHistory;
