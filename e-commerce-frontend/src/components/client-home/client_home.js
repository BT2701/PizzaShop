import React, { useState, useEffect, useRef } from 'react';
import '../../Static/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'normalize.css';
import { initializeSlider } from '../../Static/js/homepage';
import axios from 'axios';

function ClientHome() {
  const [sanphamListnoibac, setSanphamListnoibac] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const sanphamNoiBacResponse = await axios.get('http://localhost:8081/api/sanphamnoibac');
        setSanphamListnoibac(sanphamNoiBacResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    initializeSlider();
  }, []);

  return (
    <div className='container'>
      <section id="slider">
        <div className="aspect-ratio-169">
          <img src={require('../../Static/IMG/poster.png')} alt="Poster 1" />
          <img src={require('../../Static/IMG/poster2.png')} alt="Poster 2" />
          <img src={require('../../Static/IMG/poster3.png')} alt="Poster 3" />
          <img src={require('../../Static/IMG/poster4.png')} alt="Poster 4" />
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
                  <select className='form-select' >
                    <option disabled selected hidden>Filters</option>
                    <option value={'type'}>Type</option>
                    <option value={'Cost'}>Cost</option>
                    <option value={'Date'}>Date</option>
                  </select>
                </li>
                <li>
                  <input type='number' className='form-control num-of-product' value={5}/>
                </li>
              </ul>
            </div>
            <div className="product-gallery-content-product">
              {sanphamListnoibac.length === 0 ? (
                <p>Không có sản phẩm nào</p>
              ) : (
                sanphamListnoibac.map((sanpham) => (
                  <div
                    key={sanpham.masp}
                    className="product-gallery-content-product-item"
                  >
                    <div className="split-img">
                      <img src={sanpham.hinhanh} alt={sanpham.tensp} className="image-product-vip" />
                    </div>
                    <div className="product-gallery-content-product-text">
                      {sanpham.loai.tenloai && (new Date(sanpham.soluong) > new Date() || !sanpham.soluong) ? (
                        <li style={{ backgroundColor: sanpham.donvitinh ?? '#fcfcfc' }}>
                          <img src={require('../../Static/IMG/icon-percent.webp')} alt="" />
                          <p>{sanpham.dongia}</p>
                        </li>
                      ) : (
                        <li style={{ backgroundColor: '#fcfcfc' }}></li>
                      )}
                      <li>{sanpham.tensp}</li>
                      <li>Online giá rẻ</li>
                      <li>
                        <a href="">{sanpham.dongia}<sup>đ</sup></a>
                        <span>-{sanpham.dongia ?? 0}%</span>
                      </li>
                      <li>
                        {(sanpham.dongia != null
                          ? sanpham.dongia - sanpham.dongia * sanpham.dongia / 100
                          : sanpham.dongia).toFixed(2)}<sup>đ</sup>
                      </li>
                      <li>
                        {sanpham.donvitinh != null && [...Array(sanpham.donvitinh)].map((_, starIndex) => (
                          <i key={starIndex} className="fa-solid fa-star" style={{ color: '#FB6E2E' }}></i>
                        ))}
                      </li>
                      <li>
                        <p style={{ color: 'gray' }}>Đã bán {sanpham.soluong ?? 0}</p>
                      </li>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientHome;