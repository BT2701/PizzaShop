import React, { useState, useEffect, useContext } from 'react';import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/profile.css';
import { UserContext } from '../login-resigter/UserContext';
import axios from 'axios';


const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [isContentVisible, setIsContentVisible] = useState(false);
  let imageSrc;

  try {
    imageSrc = require(`../../Static/IMG/${user?.avt}`);
  } catch (error) {
    console.error(error);
    imageSrc = require('../../Static/IMG/BT.png'); // Path to the default image
  }
  function formatCurrency(amount) {
    return amount?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  const handleShowClick = () => {
    setIsContentVisible(true);
  };

  const handleHideClick = () => {
    setIsContentVisible(false);
  };

  useEffect(()=>{
    const checkSession= async()=>{
      try{
        const response = await axios.get('http://localhost:8081/api/session', { withCredentials: true });
        if (response.data.authenticated) {
          setUser(response.data.user);
      } else {
          setUser(null); // Chuyển hướng đến trang đăng nhập nếu không xác thực
      }
      }
      catch(error){
        console.error('Error checking session:', error);
      }
    };
    checkSession();
  },[setUser]);
  return (
    <div className="profile-container container">
      <div className="profile-header row align-items-center">
        <div className="profile-header-left col-md-2 text-center">
          <img src={imageSrc} alt="user" className="img-fluid rounded-circle" />
        </div>
        <div className="profile-header-mid">
          <p className="h3">{user?.ho+" "+user?.ten}</p>
          <div className="profile-header-mid-fee">
            <label className="mr-2">Tổng chi tiêu: </label>
            <p className="mb-0">{formatCurrency(user?.tongchitieu)}</p>
          </div>
        </div>
        <div className="profile-header-right">
        {!isContentVisible && (<i class="fa-solid fa-chevron-down control-down" onClick={handleShowClick}></i>)}
        {isContentVisible && (<i class="fa-solid fa-chevron-up control-up" onClick={handleHideClick}></i>)}
        {isContentVisible && ( <div class="profile-header-right-control">
            <button className="btn profile-header-right-control-btn"><i class="fa-solid fa-clock-rotate-left"></i> Lịch sử đơn hàng</button>
            <button className="btn profile-header-right-control-btn"><i className="fa-solid fa-arrows-rotate"></i> Đổi mật khẩu</button>
          </div>)}
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-username" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-user"></i> Tên đăng nhập:
          </label>
          <div className="col-sm-10">
            <input type="text" id="profile-username" className="form-control" value={user?.taikhoan.username} readOnly />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-email" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-envelope"></i> Email:
          </label>
          <div className="col-sm-10">
            <input type="email" id="profile-email" className="form-control" value={user?.email}/>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-phone" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-phone"></i> Số điện thoại:
          </label>
          <div className="col-sm-10">
            <input type="number" id="profile-phone" className="form-control" value={user?.sdt} />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-gender" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-person-half-dress"></i> Giới tính:
          </label>
          <div className="col-sm-10">
            <select name="profile-gender" id="profile-gender" className="form-select" value={user?.gioitinh}>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-birth" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-cake-candles"></i> Ngày sinh:
          </label>
          <div className="col-sm-10">
            <input type="date" id="profile-birth" className="form-control" value={user?.birth} />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-address" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-location-dot"></i> Địa chỉ:
          </label>
          <div className="col-sm-10">
            <input type="text" id="profile-address" className="form-control" value={user?.address}/>
          </div>
        </div>
      </div>
      <div className="profile-footer text-center mt-4">
        <button className="btn btn-secondary"><i className="fa-solid fa-pen-to-square"></i> Cập nhật</button>
      </div>
    </div>
  );
};

export default Profile;
