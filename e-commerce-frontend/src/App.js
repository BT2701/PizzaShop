// src/App.js
import React from 'react';
import StudentTable from './components/content/studentTable';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import Login from './components/login-resigter/login';
const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <StudentTable/>
      </div>
      <Footer />
      <Login />
    </div>
    );
};

export default App;
