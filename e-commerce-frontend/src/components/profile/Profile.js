import React, { useState, useEffect, useContext, useRef } from 'react';import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Static/CSS/profile.css';
import { UserContext } from '../login-resigter/UserContext';
import axios from 'axios';
import LoginModal from '../login-resigter/Notification';
import ChangePasswordModal from './ChangePass';
import { Link } from 'react-router-dom';


const Profile = () => {
  const [modalContent, setModalContent] = useState({ message: '', success: false });
  const [showModal, setShowModal] = useState(false);
  
  const { user, setUser } = useContext(UserContext);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [makh, setMakh] =useState(user?.makh || 1);
  const [avt, setAvt] = useState(user?.avt || '../../Static/IMG/BT.png');
  const [email, setEmail] = useState(user?.email || "");
  const [sdt, setSdt] = useState(user?.sdt || "");
  const [gender, setGender] = useState(user?.gioitinh || "");
  const [birth, setBirth] = useState(user?.birth || "");
  const [address, setAddress] = useState(user?.address || "");
  const [ho, setHo]= useState("");
  const [ten, setTen]=useState("");
  const [tongchitieu, setTongchitieu]= useState(0);
  const [username, setUsername]= useState(user?.taikhoan.username||"");

  const [showModalChange, setShowModalChange] = useState(false);

  const handleOpenModalChange = () => setShowModalChange(true);
  const handleCloseModalChange = () => setShowModalChange(false);
  let imageSrc;
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avt', file);
      formData.append('makh', makh);

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });
        if (response.data.success) {
          setAvt(response.data.filename);
          setModalContent({ message: 'Upload Successful!', success: true });
        } else {
          setModalContent({ message: 'Upload Failed file!', success: false });
        }
        setShowModal(true);
      } catch (error) {
        console.error('Error uploading file:', error);
        setModalContent({ message: 'Upload Failed!', success: false });
        setShowModal(true);
      }
    }
  };

  try {
    imageSrc = require(`../../Static/IMG/${avt}`);
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

  const handledUpdate = async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/updateCustomer`,null,{
        params:{
          makh: makh,
          avt: avt,
          email: email,
          sdt: sdt,
          gender: gender,
          birth: birth,
          address: address,
          ho: ho,
          ten: ten,
          tongchitieu: tongchitieu,
          username: username
        },
        withCredentials: true
      });
      if(response.data.checked){
        setModalContent({ message: 'Update Successful!', success: true });
        // setUser(response.data.user);
      }
      else{
        setModalContent({ message: 'Update Failed!', success: false });
      }
    }
    catch(error){
      console.error(error);
    }
    // finally{
    //   setShowModal(true);
    //   setTimeout(() => {
    //   window.location.reload();
    //   },1000);
    // }
  }
  useEffect(()=>{
    const checkSession= async()=>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/session`, { withCredentials: true });
        if (response.data.authenticated) {
          setUser(response.data.user);
          const userData = response.data.user;
          setMakh(userData.makh);
          setAvt(userData.avt);
          setEmail(userData.email);
          setSdt(userData.sdt);
          setGender(userData.gioitinh);
          setBirth(userData.birth);
          setAddress(userData.address);
          setHo(userData.ho);
          setTen(userData.ten);
          setTongchitieu(userData.tongchitieu || 0);
          setUsername(userData.taikhoan.username);
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
      <form onSubmit={handledUpdate} enctype="multipart/form-data">
      <div className="profile-header row align-items-center">
        <div className="profile-header-left col-md-2 text-center">
          <img src={imageSrc} alt="user" className="img-fluid rounded-circle" />
          <button class="profile-change-avt btn" onClick={handleButtonClick}><i className="fa-solid fa-arrows-rotate"></i></button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="profile-header-mid">
          <p className="h3">{user?.ho+" "+user?.ten}</p>
          <div className="profile-header-mid-fee">
            <label className="mr-2">Total Spending: </label>
            <p className="mb-0">{formatCurrency(user?.tongchitieu)}</p>
          </div>
        </div>
        <div className="profile-header-right">
        {!isContentVisible && (<i class="fa-solid fa-chevron-down control-down" onClick={handleShowClick}></i>)}
        {isContentVisible && (<i class="fa-solid fa-chevron-up control-up" onClick={handleHideClick}></i>)}
        {isContentVisible && ( <div class="profile-header-right-control">
            <Link className="btn profile-header-right-control-btn profile-option-btn" to={"/PizzaShop/history"}><i class="fa-solid fa-clock-rotate-left"></i> Order History</Link>
            <button className="btn profile-header-right-control-btn profile-option-btn" onClick={handleOpenModalChange}><i className="fa-solid fa-arrows-rotate"></i> Change Password</button>
          </div>)}
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-username" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-user"></i> Username:
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
            <input type="email" id="profile-email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-phone" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-phone"></i> Phone number:
          </label>
          <div className="col-sm-10">
            <input type="number" id="profile-phone" className="form-control" value={sdt} onChange={(e)=>setSdt(e.target.value)}/>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-gender" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-person-half-dress"></i> Gender:
          </label>
          <div className="col-sm-10">
            <select name="profile-gender" id="profile-gender" className="form-select" value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-birth" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-cake-candles"></i> Birth:
          </label>
          <div className="col-sm-10">
            <input type="date" id="profile-birth" className="form-control" value={birth} onChange={(e)=>setBirth(e.target.value)}/>
          </div>
        </div>
        <div className="profile-content-row form-group row">
          <label htmlFor="profile-address" className="col-sm-2 col-form-label">
            <i className="fa-solid fa-location-dot"></i> Address:
          </label>
          <div className="col-sm-10">
            <input type="text" id="profile-address" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="profile-footer text-center mt-4">
        <button className="btn btn-secondary" type='submit'><i className="fa-solid fa-pen-to-square"></i> Cập nhật</button>
      </div>
      </form>
      <LoginModal
                show={showModal}
                onHide={() => setShowModal(false)}
                content={modalContent}
            />
      <ChangePasswordModal show={showModalChange} handleClose={handleCloseModalChange} />
    </div>
  );
};

export default Profile;
