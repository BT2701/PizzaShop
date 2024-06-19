import React, { useState, useEffect, useRef } from 'react';
import '../../Static/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'normalize.css';

function ClientHome() {
  const [sanphamList, setSanphamList] = useState([]);
  const [sanphamListnoibac, setSanphamListnoibac] = useState([]);
  const [sanphamListkhuyenmai, setSanphamListkhuyenmai] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  const rightBtnRef = useRef(null);
  const leftBtnRef = useRef(null);
  const sliderProductParentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const sanphamResponse = await fetch('/api/sanpham'); // Adjust the URL to your API endpoint
      const sanphamData = await sanphamResponse.json();
      setSanphamList(sanphamData);

      const sanphamNoiBacResponse = await fetch('/api/sanphamnoibac');
      const sanphamNoiBacData = await sanphamNoiBacResponse.json();
      setSanphamListnoibac(sanphamNoiBacData);

      const sanphamKhuyenMaiResponse = await fetch('/api/sanphamkhuyenmai');
      const sanphamKhuyenMaiData = await sanphamKhuyenMaiResponse.json();
      setSanphamListkhuyenmai(sanphamKhuyenMaiData);
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

  const handleRightClick = () => {
    setSliderIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > sanphamListkhuyenmai.length - 1 ? 0 : newIndex;
    });
  };

  const handleLeftClick = () => {
    setSliderIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? sanphamListkhuyenmai.length - 1 : newIndex;
    });
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

      <section className="first-slider-product" style={{ display: sanphamListkhuyenmai.length > 0 ? 'block' : 'none' }}>
        <div className="product-container">
          <div className="content">
            <div className="title">
              <h2 id="title-slider-product">Săn sale online mỗi ngày</h2>
            </div>
            <div className="slider-product-container">
              <div className="slider-product-items-parent" ref={sliderProductParentRef}>
                {sanphamListkhuyenmai.length === 0 ? (
                  <p>Không có sản phẩm nào</p>
                ) : (
                  sanphamListkhuyenmai.map((sanpham, index) => (
                    <div key={index} className="slider-product-item">
                      <img src={sanpham.src} alt={sanpham.tenSanPham} />
                      <div className="slider-product-text">
                        {sanpham.tenKhuyenMai ? (
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
              <div className="slider-product-btn">
                <i className="fas fa-chevron-left" onClick={handleLeftClick} ref={leftBtnRef}></i>
                <i className="fas fa-chevron-right" onClick={handleRightClick} ref={rightBtnRef}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-gallery-one">
        <div className="container">
          <div className="product-gallery-content">
            <div className="product-gallery-title">
              <h2>SẢN PHẨM NỔI BẬT NHẤT</h2>
              <ul style={{ display: 'none' }}>
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
                    // onClick={() => detailProduct(sanpham.id)}
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

// function detailProduct(id) {
//   window.location.replace(`http://localhost/SaleSphere/index.php?page=productdetail&id=${id}`);
// }

export default ClientHome;
