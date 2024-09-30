import React, { useState, useEffect, useRef } from 'react';
import '../../Static/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'normalize.css';
import { initializeSlider } from '../../Static/js/homepage';
import axios from 'axios';
import { data } from 'autoprefixer';
import ProductDetail from '../client-products/productDetail';
import { useCart } from '../cart/CartContext';


function ClientHome() {
  const [sanphamListnoibac, setSanphamListnoibac] = useState([]);
  const [selectedValue, setSelectedValue] = useState('Fillters');
  const [limit, setLimit]= useState(5);
  const[productId, setProductID]=useState(1);
  const[showModal, setShowModal]=useState(false);
  const[salerProduct, setSalerProduct]= useState(0);
  const { cartCount } = useCart();

  function showDetailModal(id, saler){
    setProductID(id);
    setSalerProduct(saler);
    setShowModal(true);
  }
  const handleInputChange=(event)=>{
    event.preventDefault();
    const value=parseInt(event.target.value);
    setLimit(value);
  }
  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {

        const sanphamNoiBacResponse = await axios.get(`${process.env.REACT_APP_API_URL}/sanphamnoibac?limit=`+limit);
        setSanphamListnoibac(sanphamNoiBacResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    initializeSlider();
  }, [limit, cartCount]);

  return (
    <div className='home-container'>
      <section id="slider">
        <div className="aspect-ratio-169">
          <img src={require('../../Static/IMG/poster3.gif')} alt="Poster 1" className='home-slider-img' />
          <img src={require('../../Static/IMG/poster.png')} alt="Poster 2" className='home-slider-img' />
          <img src={require('../../Static/IMG/poster1.png')} alt="Poster 3" className='home-slider-img' />
          <img src={require('../../Static/IMG/pizzabanner.png')} alt="Poster 4" className='home-slider-img' />
        </div>
        <div className="dot-container">
        <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
      </section>

      <section className="product-gallery-one">
        <div className="container">
          <div className="product-gallery-content">
            <div className="product-gallery-title">
              <h2>SẢN PHẨM NỔI BẬT NHẤT</h2>
              <ul style={{ display: 'flex'}}>
                <li>
                  <select className='form-select' value={selectedValue}>
                    <option value={'type'}>Type</option>
                    <option value={'Cost'}>Cost</option>
                    <option value={'Date'}>Date</option>
                  </select>
                </li>
                <li>
                  <input type='number' className='form-control num-of-product' id='number-of-product' value={limit} onChange={handleInputChange}/>
                </li>
              </ul>
            </div>
            <div className="product-gallery-content-product">
              {sanphamListnoibac.length === 0 ? (
                <p>Không có sản phẩm nào</p>
              ) : (
                sanphamListnoibac.map((sanpham) => (
                  <div
                    key={sanpham[0].masp}
                    className="product-gallery-content-product-item" onClick={()=>showDetailModal(sanpham[0].masp, sanpham[1])}
                  >
                    <div className="split-img">
                      <img src={require('../../Static/IMG/SanPham/'+sanpham[0].hinhanh)} alt={sanpham[0].tensp} className="image-product-vip" />
                    </div>
                    <div className="product-gallery-content-product-text">
                      
                      <li>{sanpham[0].tensp}</li>
                      
                      <li>
                        {formatCurrency(sanpham[0].dongia)}
                      </li>
                      
                      <li>
                        <p style={{ color: 'gray' }}>Đã bán {sanpham[1] ?? 0}</p>
                      </li>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <ProductDetail
        productId={productId}
        showModal={showModal}
        saler={salerProduct}/>
    </div>
  );
}

export default ClientHome;
