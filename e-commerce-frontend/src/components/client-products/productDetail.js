import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/product-detailStyle.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ProductDetail = ({ productId, showModal, saler }) => {
  const [detailProduct, setDetailProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [modal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch product details here
    axios.get(`http://localhost:8081/api/product?productId=${productId}`).then((response) => {
      setDetailProduct(response.data);
      setShowModal(showModal);
    });

    // Additional initialization
    // checkQuantity(detailProduct.quantityProductInStore);
    // hienthisaotrungbinh(detailProduct.avgEvaluate);
  }, [productId]);

  if (!detailProduct) {
    return <div></div>;
  }

  

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(detailProduct.soluong, prevQuantity + 1));
  };

  const addProductToCart = () => {
    // Add to cart logic
  };

  const buyNow = () => {
    // Buy now logic
  };

  const handlePagination = (rating) => {
    // Handle pagination
  };

  return (
    <>
      <Modal show={modal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{detailProduct.tensp}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="product-detail_wraper">
            <div className="container">
              <div className="row pb-5 pt-3">
                <div className="col-lg-5 col-12">
                  <img src={require('../../Static/IMG/SanPham/'+detailProduct.hinhanh)} className="product-detail_image" alt="product image for detail" />
                </div>
                <div className="col-lg-7 col-12 mt-5 mt-lg-0 product-detail">
                  <span className="product-name">
                    {detailProduct.tensp}
                  </span>
                  <div className="product-info">
                    <div className="rating-info">
                      <a href="#user-evaluate-container" className="number-rating">
                        {/* {detailProduct.avgEvaluate.toFixed(1)} */}
                      </a>
                      <div className="avarage-star-container"></div>
                    </div>
                    <span className="sperate"></span>
                    {/* <div className="feedback">
                      <a href="#user-evaluate-container" className="number-feedback">
                        {detailProduct.quantityEvaluateAll}
                      </a>
                      Đánh giá
                    </div> */}
                    <span className="sperate"></span>
                    <div className="sold">
                      {saler} Đã bán
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="has-discount">
                      <div className="original-price">
                        {detailProduct.dongia !== 0 && `${detailProduct.dongia}đ`}
                      </div>
                      <div className="discount-price">
                        {detailProduct.dongia}đ
                      </div>
                      {/* <div className="percent-discount">
                        {detailProduct.valueDiscount !== 0 && `${detailProduct.valueDiscount}% GIẢM`}
                      </div> */}
                    </div>
                  </div>
                  <div className="product-discription">
                    {detailProduct.tensp}
                  </div>
                  <div className="case-has-quantity">
                    <div className="quantity">
                      <label htmlFor="quantity" className="quantity-title">Số lượng</label>
                      <button className="quantity-btn" id="quantity-btn-decrease" >-</button>
                      <input
                        className="quantity-input"
                        type="number"
                        id="quantityInput"
                        name="quantityInput"
                        value={quantity}
                        min="1"
                        max={detailProduct.soluong}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <button className="quantity-btn" id="quantity-btn-increase" onClick={increaseQuantity}>+</button>
                      <label className="quantity-current">
                        Còn {detailProduct.soluong} {detailProduct.donvitinh}
                      </label>
                    </div>
                    <button className="btn-add-product" id="btn-add-product" onClick={addProductToCart}>
                      <i className="fa-solid fa-cart-plus"></i>
                      Thêm vào giỏ hàng
                    </button>
                    <button className="btn-buy-product" onClick={buyNow}>
                      Mua ngay
                    </button>
                  </div>
                  <div className="case-none-quantity">
                    <div className="alert alert-info mt-3" role="alert">
                      Sản phẩm đã hết hàng !
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="product-evaluation">
            <div className="container">
              <h2 className="mt-5 mb-4">Đánh giá sản phẩm</h2>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="average-rating">
                  <strong>{`${detailProduct.avgEvaluate.toFixed(1)} trên 5`}</strong>
                  <div className="avarage-star-container"></div>
                </div>
                <div className="filter-buttons d-none d-md-block">
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('_')}>Tất cả</button>
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('5')}>5 sao</button>
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('4')}>4 sao</button>
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('3')}>3 sao</button>
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('2')}>2 sao</button>
                  <button type="button" className="btn btn-primary" onClick={() => handlePagination('1')}>1 sao</button>
                </div>
                <div className="dropdown d-md-none">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><button className="dropdown-item" onClick={() => handlePagination('_')}>Tất cả</button></li>
                    <li><button className="dropdown-item" onClick={() => handlePagination('5')}>5 sao</button></li>
                    <li><button className="dropdown-item" onClick={() => handlePagination('4')}>4 sao</button></li>
                    <li><button className="dropdown-item" onClick={() => handlePagination('3')}>3 sao</button></li>
                    <li><button className="dropdown-item" onClick={() => handlePagination('2')}>2 sao</button></li>
                    <li><button className="dropdown-item" onClick={() => handlePagination('1')}>1 sao</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col user-evaluate-container" id="user-evaluate-container">
                  <div className="case-none-evaluate text-center"></div>
                  <div className="case-has-evaluate"></div>
                </div>
              </div>
            </div>
            <div className="container">
              <nav aria-label="Page navigation -flex">
                <ul className="pagination justify-content-center"></ul>
              </nav>
            </div>
          </section> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetail;
