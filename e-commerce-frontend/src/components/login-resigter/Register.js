// Register.js
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="login-page container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 intro-side">
          <h2 className="text-center">Chào mừng đến với trang đăng ký</h2>
          <p>Hệ thống quản lý cho mượn thiết bị NHÓM 2</p>
        </div>
        <div className="col-lg-6 register-side">
          <h2 className="text-center mb-4">Tạo tài khoản</h2>
          <form id="formdangky">
            <div className="mb-3">
              <div>
                <label htmlFor="email" className="form-label">Mã Thành Viên: <span style={{ color: 'red' }}>*</span></label>
                <div style={{ display: 'flex' }}>
                  <input type="text" className="form-control mb-2" id="idfirst" name="idfirst" readOnly style={{ width: '20%' }} />
                  <input type="text" className="form-control mb-2" id="id" name="id" placeholder="123456" maxLength="6"  />
                </div>
              </div>
              <div className="error">
                <div id="idError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="username" className="form-label">Email: <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control mb-2" id="email" name="email" placeholder="abc@gmail.com" />
              </div>
              <div className="error">
                <div id="EmailError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="khoa" className="form-label">Chọn khoa:<span style={{ color: 'red' }}>*</span></label>
              <select id="comboboxKhoa" name="khoa" className="form-select mb-2">
                {/*js se fill du lieu vao*/}
              </select>
            </div>
            <div className="error">
              <div id="comboboxKhoaherror" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
            </div>
            <div>
              <label htmlFor="khoa" className="form-label">Chọn Ngành:<span style={{ color: 'red' }}>*</span></label>
              <select id="comboboxNganh" name="Nganh" className="form-select mb-2">
                <option value="nonekhoa" selected disabled>Chọn Ngành</option>
                {/*js se fill du lieu vao*/}
              </select>
            </div>
            <div className="error">
              <div id="comboboxNganherror" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
            </div>
            <div>
              <label htmlFor="khoa" className="form-label">Chọn Khóa:<span style={{ color: 'red' }}>*</span></label>
              <select id="comboboxKhoahoc" name="khoahoc" className="form-select mb-2" >
                {/*js se fill du lieu vao*/}
              </select>
            </div>
            <div className="error">
              <div id="comboboxKhoahocerror" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="password" className="form-label">Mật khẩu: <span style={{ color: 'red' }}>*</span></label>
                <input type="password" className="form-control" id="password" name="password" placeholder="aaaa1234" />
              </div>
              <div className="error">
                <div id="passwordError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="confirmpassword" className="form-label">Xác nhận mật khẩu: <span style={{ color: 'red' }}>*</span></label>
                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="aaaa1234" />
              </div>
              <div className="error">
                <div id="confirmpasswordError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}></div>
              </div>
            </div>
            <input type="checkbox" id="showPasswordCheckbox"  />
            <label style={{ fontWeight: 'bold' }}>Hiện mật khẩu</label>
            <div className="form-operation">
              <div className="text-center mb-3">
                <button type="button" className="btn btn-primary btn-login" >Đăng ký</button>
              </div>
              <div className="text-center mb-3">
                <Link to="/login" className="btn btn-primary btn-register">Đăng nhập</Link>
              </div>
            </div>
            <div className="alert alert-danger" role="alert">
              <span>{/* Error message here */}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
