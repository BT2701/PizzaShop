import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/cart.css'; // Đảm bảo rằng bạn có tệp CSS này trong thư mục src
import { Modal } from 'react-bootstrap';

function Cart ({show,handleClose,details}) {
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      }
      function sum(){
        let temp=0;
        for (let i=0;i<details.length;i++){
            temp=temp+(details[i].sanpham.dongia * details[i].soluong);
        }
        return temp;
      }
    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>
                    Giỏ hàng
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <div className="cart-container bg-light p-4 rounded container mt-4">
            <div className="cart-content">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                    {details.length === 0 ? (
                        <p>Empty</p>
                    ) : (
                    details.map((detail) => (
                        <tr>
                            <td>
                                <div className="cart-content-name d-flex align-items-center">
                                    <img src={require("../../Static/IMG/SanPham/"+detail?.sanpham.hinhanh)} alt="" className="img-thumbnail mr-2" style={{ width: '100px', height: 'auto' }} />
                                    <h5 className="mb-0">{detail?.sanpham.tensp}</h5>
                                </div>
                            </td>
                            <td>
                                <span className="font-weight-bold">{formatCurrency(detail?.sanpham.dongia)}</span>
                            </td>
                            <td>
                                <div className="cart-content-handle d-flex align-items-center">
                                    <input type="number" className="form-control mr-2" style={{ width: '100px' }} value={detail?.soluong} />
                                    <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                        ))
                    ) }
                    </tbody>
                </table>

            </div>
            <div className='cart-total'>
                <label>Tổng cộng: </label>
                <span>{formatCurrency(sum())}</span>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='cart-footer'>
                <button className='btn btn-secondary' onClick={handleClose}>Đóng</button>
                <button className='btn btn-primary'>Thanh toán</button>
            </div>
        </Modal.Footer>
        </Modal>
    );
};

export default Cart;
