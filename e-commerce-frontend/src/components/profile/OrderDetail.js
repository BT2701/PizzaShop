import '../../Static/CSS/OrderDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function OrderDetail({mahd, show, handleClose, details}) {
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
        <Modal.Title>Code: {mahd}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
        <div className="order-detail-container">
            {/* truyen ma hoa don vao header xong tu header useEffect lay du lieu */}
            {details.lenght===0?(
                <p>Empty</p>
            ):(
                details.map((detail)=>(

                
            <div className="order-detail-box">
                <div className="order-detail-box-content">
                    <div className="order-detail-box-content-left">
                        <img src={require("../../Static/IMG/SanPham/"+detail.sanpham.hinhanh)} alt="Pizza Shop" />
                    </div>
                    <div className="order-detail-box-content-mid">
                        <h5>{detail.sanpham.tensp}</h5>
                        <div className="order-detail-box-content-mid-center">
                            <li>{formatCurrency(detail.sanpham.dongia)}</li>
                            <li>Số lượng: <span>{detail.soluong}</span></li>
                        </div>
                    </div>
                </div>
                <div className="order-detail-box-bot">
                    <label>Thành tiền: </label>
                    <li>{formatCurrency(detail.thanhtien)}</li>
                </div>
            </div>
                ))
        )}
        </div>
        </Modal.Body>
        </Modal>
    );
}

export default OrderDetail;
