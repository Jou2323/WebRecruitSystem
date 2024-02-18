import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import NavbarHead from "./layout/NavbarHead";

import Login from './pages/Login';
import Registretion from './pages/Registretion';

import routes from './routes.js';

const AppContent = () => {
  return (
    <div className="App" >
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

const Authorization = () => {
  return (
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/Registretion' element={<Registretion />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<AppContent />} />
        <Route path='/Login/*' element={<Authorization />} />
      </Routes>
    </Router>
  );
};

export default App;
