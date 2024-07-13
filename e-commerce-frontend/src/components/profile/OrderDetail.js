import '../../Static/CSS/OrderDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function OrderDetail({mahd, show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
        <Modal.Title>Code: {mahd}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
        <div className="order-detail-container">
            {/* truyen ma hoa don vao header xong tu header useEffect lay du lieu */}
            <div className="order-detail-box">
                <div className="order-detail-box-content">
                    <div className="order-detail-box-content-left">
                        <img src={require("../../Static/IMG/pizzashop.png")} alt="Pizza Shop" />
                    </div>
                    <div className="order-detail-box-content-mid">
                        <h5>Pizza</h5>
                        <div className="order-detail-box-content-mid-center">
                            <li>50,000vnd</li>
                            <li>Quantity: <span>2</span></li>
                        </div>
                    </div>
                </div>
                <div className="order-detail-box-bot">
                    <label>Total: </label>
                    <li>100,000vnd</li>
                </div>
            </div>
        </div>
        </Modal.Body>
        </Modal>
    );
}

export default OrderDetail;
