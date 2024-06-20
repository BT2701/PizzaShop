import React, { useState, useEffect, useRef } from 'react';
import '../../Static/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'normalize.css';
import axios from 'axios';

function ClientHome() {
  const [sanphamListnoibac, setSanphamListnoibac] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliderProductParentRef = useRef(null);

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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming 4 slides
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (sliderProductParentRef.current) {
      sliderProductParentRef.current.style.right = `${sliderIndex * 100}%`;
    }
  }, [sliderIndex]);

  return (
    <div>
      <section id="slider">
        <div className="aspect-ratio-169" style={{ left: `-${currentSlide * 100}%` }}>
          <img src={require('../../Static/IMG/poster.png')} alt="Poster 1" />
          <img src={require('../../Static/IMG/poster2.png')} alt="Poster 2" />
          <img src={require('../../Static/IMG/poster3.png')} alt="Poster 3" />
          <img src={require('../../Static/IMG/poster4.png')} alt="Poster 4" />
        </div>
        <div className="dot-container">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </section>

      <section className="product-gallery-one">
        <div className="container">
          <div className="product-gallery-content">
            <div className="product-gallery-title">
              <h2>SẢN PHẨM NỔI BẬT NHẤT</h2>
              <ul style={{ display: 'flex' }}>
                <li><a href="">Catgories</a></li>
                <li><a href="">Catgories</a></li>
                <li><a href="">Tất cả</a></li>
              </ul>
            </div>
            <div className="product-gallery-content-product">
              {sanphamListnoibac.length === 0 ? (
                <p>Không có sản phẩm nào</p>
              ) : (
                sanphamListnoibac.map((sanpham) => (
                  <div
                    key={sanpham.id}
                    className="product-gallery-content-product-item"
                  >
                    <div className="split-img">
                      <img src={sanpham.src} alt={sanpham.tenSanPham} className="image-product-vip" />
                    </div>
                    <div className="product-gallery-content-product-text">
                      {sanpham.tenKhuyenMai && (new Date(sanpham.hansudung) > new Date() || !sanpham.hansudung) ? (
                        <li style={{ backgroundColor: sanpham.background ?? '#fcfcfc' }}>
                          <img src={require('../../Static/IMG/icon-percent.webp')} alt="" />
                          <p>{sanpham.tenKhuyenMai}</p>
                        </li>
                      ) : (
                        <li style={{ backgroundColor: '#fcfcfc' }}></li>
                      )}
                      <li>{sanpham.tenSanPham}</li>
                      <li>Online giá rẻ</li>
                      <li>
                        <a href="">{sanpham.giaBan}<sup>đ</sup></a>
                        <span>-{sanpham.giaTri ?? 0}%</span>
                      </li>
                      <li>
                        {(sanpham.giaTri != null
                          ? sanpham.giaBan - sanpham.giaBan * sanpham.giaTri / 100
                          : sanpham.giaBan).toFixed(2)}<sup>đ</sup>
                      </li>
                      <li>
                        {sanpham.TrungBinhStar != null && [...Array(sanpham.TrungBinhStar)].map((_, starIndex) => (
                          <i key={starIndex} className="fa-solid fa-star" style={{ color: '#FB6E2E' }}></i>
                        ))}
                      </li>
                      <li>
                        <p style={{ color: 'gray' }}>Đã bán {sanpham.TongSoLuongBanDuoc ?? 0}</p>
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
