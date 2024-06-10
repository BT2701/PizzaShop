import React, { useState } from 'react';
import "../../Static/CSS/login.css"

const Login = () => {
  const [maTV, setMaTV] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let valid = true;
    if (!maTV) {
      setUsernameError('Mã thành viên là bắt buộc');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Mật khẩu là bắt buộc');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      console.log('Form submitted');
    }
  };

  return (
    <section className="login-page container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 intro-side">
          <h2 className="text-center">Chào mừng đến với trang đăng nhập</h2>
          <p>Hệ thống quản lý cho mượn thiết bị NHÓM 2</p>
        </div>
        <div className="col-lg-6 login-side">
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div>
                <label htmlFor="maTV" className="form-label">Mã thành viên</label>
                <input
                  type="text"
                  className="form-control"
                  id="maTV"
                  name="maTV"
                  placeholder="11xxxxxxxx"
                  value={maTV}
                  onChange={(e) => setMaTV(e.target.value)}
                />
              </div>
              <div className="error">
                <div id="usernameError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}>
                  {usernameError}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="password" className="form-label">Mật khẩu</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="error">
                <div id="passwordError" className="error-message" style={{ color: 'red', marginBottom: '3%' }}>
                  {passwordError}
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              id="showPasswordCheckbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label style={{ fontWeight: 'bold' }}>Hiện mật khẩu</label>
            <div className="mb-4">
              <a href="./forgot-password">Quên mật khẩu</a>
            </div>
            <div className="form-operation">
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-primary btn-login">Đăng nhập</button>
              </div>
              <div className="text-center mb-3">
                <a href="./sign-up" className="btn btn-primary btn-register">Đăng ký</a>
              </div>
            </div>
            <div className="alert alert-danger" role="alert">
              {/* Display error message here if needed */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
