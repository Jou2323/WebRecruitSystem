import React from 'react';
import { BrowserRouter as Router, Routes, Route    } from 'react-router-dom';
import Login from './function/LoginForm';
import Registretion from './function/RegistrationForm';
import { AuthProvider } from './AuthContext';
import AppContent from './AppContent';
import HomepageUser from './pages/HomepageUser.js'
import VacancyUser from './pages/VacancyUser.js';
import ViewVacancyUser from './function/ViewVacancyUser';
import NavbarHeadUser from './layout/NavbarHeadUser.js';


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
    <>
    <NavbarHeadUser/>
    <Routes>
        <Route path='/Home' element={<HomepageUser />} />
        <Route path='/Vacancy' element={<VacancyUser />} />
        <Route path='/ViewVacancyUser/:id' element={<ViewVacancyUser/>}/>
    </Routes>
    </>
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