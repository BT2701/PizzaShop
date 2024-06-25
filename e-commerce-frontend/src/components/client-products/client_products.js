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
  const [selectedCategory, setSelectedCategory] = useState('Tất cả sản phẩm');
  const [priceRange, setPriceRange] = useState('Tất cả mệnh giá');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] =useState(1);
  const [numOfProduct, setNumOfProduct]=useState(1);
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
        const productsResponse = await axios.get('http://localhost:8081/api/productList?currentPage='+currentPage); // Thay bằng API thực tế của bạn
        const categoriesResponse = await axios.get('http://localhost:8081/api/loai'); // Thay bằng API thực tế của bạn
        const numOfProductData= await axios.get('http://localhost:8081/api/numOfProduct');
        setNumOfProduct(numOfProductData.data);
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === 'Tất cả sản phẩm' || product[0].loai.maloai === selectedCategory) &&
      (priceRange === 'Tất cả mệnh giá' || isInPriceRange(product[0].dongia, priceRange)) &&
      product[0].tensp.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const isInPriceRange = (price, range) => {
    switch (range) {
      case 'From 0 to 100000':
        return price <= 100000;
      case 'From 100000 to 200000':
        return price > 100000 && price <= 200000;
      case 'From 200000 to 500000':
        return price > 200000 && price <= 500000;
      case 'From 500000 to 2147483647':
        return price > 500000;
      default:
        return true;
    }
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
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-secondary bg-dark" type="button" id="searchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="category-right-top-items">
            <select name="" id="" onChange={handleCategoryChange}>
              <option value="Tất cả sản phẩm">Tất cả sản phẩm</option>
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
              <option value="From 0 to 100000">0 đến 100.000</option>
              <option value="From 100000 to 200000">100.000 đến 200.000</option>
              <option value="From 200000 to 500000">200.000 đến 500.000</option>
              <option value="From 500000 to 2147483647">500.000 đến ...</option>
            </select>
          </div>
        </div>
        <div className="product-gallery-content-product" id="productList">
          {filteredProducts.length ? (
            filteredProducts.map((sanpham) => (
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
          ) : (
            <p>không có sản phẩm nào</p>
          )}
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
