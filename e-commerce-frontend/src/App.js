import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import Login from './components/login-resigter/login';
import Register from './components/login-resigter/Register';
import Client_Home from './components/client-home/client_home';
import ForgotPassword from './components/login-resigter/Forgot';
import Client_Products from './components/client-products/client_products';
import { UserProvider } from './components/login-resigter/UserContext';
import Profile from './components/profile/Profile';
import OrderHistory from './components/profile/OrderHistory';
import Contact from './components/Contact/Contact';

const App = () => {
    return (
        <UserProvider>
        <Router>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route path="/*" element={<MainApp />} />
            </Routes>
        </Router>
        </UserProvider>
    );
};

const MainApp = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <Routes>
                    <Route path="/" element={<Navigate to="/homepage" />} />
                    <Route path="/homepage" element={<Client_Home />} />
                    <Route path="/products" element={<Client_Products />} />
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/history' element={<OrderHistory/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
