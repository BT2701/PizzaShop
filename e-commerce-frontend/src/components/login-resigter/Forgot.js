import React, { useState } from 'react';
import "../../Static/CSS/Forgot.css";


const ForgotPassword = () => {
    const [step, setStep] = useState(1); // Sử dụng state để quản lý bước hiện tại của quá trình

    const handleSubmitStep1 = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng submit bước 1 (gửi yêu cầu)
        setStep(2); // Chuyển sang bước 2
    };

    const handleSubmitStep2 = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng submit bước 2 (nhập mã xác nhận)
        setStep(3); // Chuyển sang bước 3
    };

    const handleSubmitStep3 = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng submit bước 3 (thay đổi mật khẩu)
        // Có thể thêm logic xử lý ở đây sau khi người dùng submit form
    };

    return (
        <div className="container">
        <img src={require("../../Static/IMG/pizzabanner.png")} alt="BT Shop" className="img-fluid my-4 darken-img" />
        <div className="card login">
                <div className="card-body">
                    <h2 className="card-title login-title">Forgot Password</h2>
                    {step === 1 && (
                        <form onSubmit={handleSubmitStep1}>
                            <div className="login-content">
                                <div className="form-group">
                                    <label htmlFor="user-name">User name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="user-name" required placeholder="ID/Email/Phone number" />
                                </div>
                                <div className="login-btn">
                                    <button className="btn-login btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={handleSubmitStep2}>
                            <div className="login-content">
                                <div className="form-group">
                                    <label htmlFor="verification">Verification<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="verification" required placeholder="xxxxxx" />
                                </div>
                                <div className="login-btn">
                                    <button className="btn-login btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                    {step === 3 && (
                        <form onSubmit={handleSubmitStep3}>
                            <div className="login-content">
                                <div className="form-group">
                                    <label htmlFor="new-password">New Password<span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" id="new-password" required placeholder="********" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="repeat">Repeat<span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" id="repeat" required placeholder="********" />
                                </div>
                                <div className="login-btn">
                                    <button className="btn-login btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
