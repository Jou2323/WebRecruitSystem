import React from 'react';
import { BrowserRouter as Router, Routes, Route    } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Login from './function/LoginForm';
import Registretion from './function/RegistrationForm';
import { AuthProvider } from './AuthContext';
import AppContent from './AppContent';
import Homepage_user from './pages/Homepage_user'
import Vacancy_user from './pages/Vacancy_user';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewVacancyUser from './function/ViewVacancyUser';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/js/theme.js';
import './assets/js/vanilla-zoom.js';
import './assets/js/Referral-Product-List-Amazon-theme.js';

const Authorization = () => {
  const handleRegistrationSuccess = (token) => {
    // Опрацюйте успішну реєстрацію тут, якщо необхідно
    console.log('Registration success!', token);
  };
  const handleLoginSuccess = (token) => {
    // Опрацюйте успішну реєстрацію тут, якщо необхідно
    console.log('Login success!', token);
  };
  return (
    <Routes>
       <Route path="/Login" element={<Login onLoginSuccess={handleLoginSuccess}/>} />
      <Route path='/Registretion' element={<Registretion onRegistrationSuccess={handleRegistrationSuccess} />} />
      
    </Routes>
  );
};
const UserView = () => {

  return (
    <Routes>
          <Route path='/Home' element={<Homepage_user />} />
        <Route path='/Vacancy' element={<Vacancy_user />} />
        <Route path='/ViewVacancyUser/:id' element={<ViewVacancyUser/>}/>
    </Routes>
  );
};
const App = () => {

  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path='/*' element={<AppContent/>}/>
        <Route path='/Authrization/*' element={<Authorization />} />
        <Route path='/User/*' element={<UserView />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;