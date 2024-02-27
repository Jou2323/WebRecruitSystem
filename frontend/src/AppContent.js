// AppContent.js
import React from 'react';
import NavbarHead from "./layout/NavbarHead";
import routes from './routes.js';
import { Routes, Route } from 'react-router-dom'; // Import useNavigate
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';

const AppContent = () => {


  return (
    <div className="App">
      <NavbarHead />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
      <footer class="bg-white sticky-footer">
        <div class="container my-auto">
          <div class="text-center my-auto copyright"><span>Copyright © Brand 2023</span></div>
        </div>
      </footer>
      <a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>
  );
};

export default AppContent;
