import React from 'react';
import StudentTable from './components/content/studentTable';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import Login from './components/login-resigter/login';
import Register from './components/login-resigter/Register';
import Client_Home from './components/client-home/client_home';
import Client_Products from './components/client-products/client_products';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-grow">
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path='/homepage' element={<Client_Home/>}/>
                        <Route path='/products' element={<Client_Products/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
