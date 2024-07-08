import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/profile.css';

const Profile = () => {
  return (
    <div className="profile-container container">
      <div className="profile-header row align-items-center">
        <div className="profile-header-left col-md-2 text-center">
          <img src={require('../../Static/IMG/BT.png')} alt="user" className="img-fluid rounded-circle" />
        </div>
        <div className="profile-header-mid">
          <p className="h3">Thành Trưởng</p>
          <div className="profile-header-mid-fee">
            <label className="mr-2">Tổng chi tiêu: </label>
            <p className="mb-0">10$</p>
          </div>
        </div>
        <div className="profile-header-right">
          <button className="btn btn-primary"><i className="fa-solid fa-arrows-rotate"></i> Đổi mật khẩu</button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-username" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-user"></i> Tên đăng nhập:
          </label>
          <div className="col-sm-10">
            <input type="text" id="profile-username" className="form-control" />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-email" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-envelope"></i> Email:
          </label>
          <div className="col-sm-10">
            <input type="email" id="profile-email" className="form-control" />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-phone" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-phone"></i> Số điện thoại:
          </label>
          <div className="col-sm-10">
            <input type="number" id="profile-phone" className="form-control" />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-gender" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-person-half-dress"></i> Giới tính:
          </label>
          <div className="col-sm-10">
            <select name="profile-gender" id="profile-gender" className="form-control">
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
            <input type="date" id="profile-birth" className="form-control" />
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-address" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-location-dot"></i> Địa chỉ:
          </label>
          <div className="col-sm-10">
            <input type="text" id="profile-address" className="form-control" />
          </div>
        </div>
      </div>
      <div className="profile-footer text-center mt-4">
        <button className="btn btn-secondary"><i className="fa-solid fa-pen-to-square"></i> Chỉnh sửa thông tin</button>
      </div>
    </div>
  );
};

export default Profile;
