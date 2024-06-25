import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/index.css';
import '../../Static/CSS/category.css';
import Pagination from '../custom/pagination';

const Client_Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [currentPage, setCurrentPage] =useState(1);
  const [numOfProduct, setNumOfProduct]=useState(1);
  const[productName, setProductName]=useState('');
  const[productType, setProductType]= useState(-1);
  const[priceRange, setPriceRange]= useState('Tất cả mệnh giá');
  // phân trang (1 trang có 15 sản phẩm)
  const totalPages = Math.ceil(numOfProduct / 15);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {

        const categoriesResponse = await axios.get('http://localhost:8081/api/loai');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('http://localhost:8081/api/productList?currentPage='+currentPage+'&productName='+productName+'&productType='+productType+'&priceRange='+priceRange); // Thay bằng API thực tế của bạn
         // Thay bằng API thực tế của bạn
        
        setProducts(productsResponse.data);

        
        const numOfProductData= await axios.get('http://localhost:8081/api/numOfProduct');
        setNumOfProduct(numOfProductData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, productName, productType, priceRange]);

  const handleCategoryChange = (event) => {
    setProductType(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSearchChange = (event) => {
    setProductName(event.target.value);
  };


  return (
    <div className="container">
      <section className="category">
        <div className="category-right">
          <div className="category-right-top-items">
            <p id="category-tittle">DANH MỤC SẢN PHẨM</p>
          </div>
          <div className="input-group" style={{ maxWidth: '250px', maxHeight: '50px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="searchButton"
              id="searchInput"
              value={productName}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-secondary bg-dark" type="button" id="searchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="category-right-top-items">
            <select name="" id="" onChange={handleCategoryChange}>
              <option value="-1">Tất cả sản phẩm</option>
              {categories.map((cate) => (
                <option key={cate.maloai} value={cate.maloai}>
                  {cate.tenloai}
                </option>
              ))}
            </select>
          </div>
          <div className="category-right-top-items">
            <select name="" id="" onChange={handlePriceRangeChange}>
              <option value="Tất cả mệnh giá">Tất cả mệnh giá</option>
              <option value="0-100000">0 đến 100.000</option>
              <option value="100000-200000">100.000 đến 200.000</option>
              <option value="200000-500000">200.000 đến 500.000</option>
              <option value="500000-2147483647">500.000 đến ...</option>
            </select>
          </div>
        </div>
        <div className="product-gallery-content-product" id="productList">
          {products.length === 0 ? (
                <p>Không có sản phẩm nào</p>
              ) : (
            products.map((sanpham) => (
                <div
                key={sanpham[0].masp}
                className="product-gallery-content-product-item"
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
          ) }
        </div>
        <div className="category-bottom">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center" id="pagination"></ul>
          </nav>
        </div>
      </section>
      <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
    </div>
  );
};

export default Client_Products;
