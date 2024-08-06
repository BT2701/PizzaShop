import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/OrderHistory.css';
import { Link } from 'react-router-dom';
import OrderDetail from './OrderDetail';
import axios from 'axios';


const OrderHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [histories, setHistories] = useState([]);
  const [detailList, setDetailList] = useState([]);
  function handleOpenModal(details){
    setDetailList(details);
    setShowModal(true);
  }
  function tinhTrang(temp){
    if(temp===1){
      return "Đã đặt hàng";
    }
    else if(temp===2){
      return "Đang giao hàng";
    }
    else{
      return "Đã nhận hàng";
    }
  }
  function countOthers(chitiethoadonlist){
    return chitiethoadonlist.length -1;
  }
  const changeColor = async () => {
    const status = document.querySelectorAll('.history-status');
    Array.from(status).forEach((label) => {
      const text = label.textContent.trim(); // Thêm trim() để loại bỏ khoảng trắng thừa
      if (text === "Đã đặt hàng") {
        label.classList.remove("text-secondary");
        label.classList.remove("text-success");
        label.classList.add("text-primary");
      } else if (text === "Đang giao hàng") {
        label.classList.remove("text-primary");
        label.classList.remove("text-success");
        label.classList.add("text-secondary");
      } else {
        label.classList.remove("text-secondary");
        label.classList.remove("text-primary");        
        label.classList.add("text-success");
      }
    });
  };
  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  function formatDate(date){
    const date1 = new Date(date);

    // Lấy ngày, tháng, năm
    const day = String(date1.getDate()).padStart(2, '0');
    const month = String(date1.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date1.getFullYear();
    
    // Định dạng ngày theo định dạng dd/MM/yyyy
    const formattedDate = `${day}/${month}/${year}`;    
    return formattedDate;
  }
  useEffect(()=>{
    const checkData= async()=>{
      try {
        const response= await axios.get('http://localhost:8081/api/history',{withCredentials:true});
        if(response.data){
          setHistories(response.data.hoaDons);
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkData();
    changeColor();
  },[]); //thêm history để quay video
  return (
    <div className='container-history-main'>
      <div className="history-container">
        <div className="history-header">
          <Link to={"/profile"} className="btn"><i className="fa-solid fa-chevron-left"></i></Link>
          <h2>Lịch sử mua hàng</h2>
        </div>
        <div className="history-content">
          {histories.length===0?(
            <p>Empty</p>
          ):(
            histories.map((history)=>(
          <div className="history-content-box">
            <div className="history-content-box-top">
              <div className="history-content-box-top-code">
                <label>Code: </label>
                <li>{history?.mahd}</li>
              </div>
              <span className='history-status'>{tinhTrang(history?.tinhtrang)}</span>
            </div>
            <div className="history-content-box-mid">
              <div className="history-content-box-mid-left">
                <img src={require('../../Static/IMG/SanPham/'+history?.chiTietHoaDonList[0].sanpham.hinhanh)} alt="Pizza Shop" />
              </div>
              <div className="history-content-box-mid-center">
                <h5>{history?.chiTietHoaDonList[0].sanpham.tensp} {countOthers(history?.chiTietHoaDonList)===0?(
                  <span></span>
                ):(
                  <span> và {countOthers(history?.chiTietHoaDonList)} khác</span>)}</h5>
                <li>Thời gian: <span>{formatDate(history?.ngaylap)}</span></li>
                <button className='btn' onClick={() =>handleOpenModal(history?.chiTietHoaDonList)}>Xem chi tiết</button>
              </div>  
              <div className="history-content-box-mid-right">
                <span className="text-danger">{formatCurrency(history?.tongtien)}</span>
              </div>
            </div>
          </div>
          ))
          )}
        </div>
      </div>
      <OrderDetail mahd={1} show={showModal} handleClose={handleCloseModal} details={detailList}/>
      </div>
  );
};

export default OrderHistory;
