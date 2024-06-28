import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentTable from './components/content/studentTable';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import Login from './components/login-resigter/login';
import Register from './components/login-resigter/Register';
import Client_Home from './components/client-home/client_home';
import ForgotPassword from './components/login-resigter/Forgot';
import Client_Products from './components/client-products/client_products';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route path="/*" element={<MainApp />} />
            </Routes>
        </Router>
    );
};

const MainApp = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/homepage" />} /> */}
                    <Route path="/homepage" element={<Client_Home />} />
                    <Route path="/products" element={<Client_Products />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
