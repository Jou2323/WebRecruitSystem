import React from 'react';
import { BrowserRouter as Router, Routes, Route    } from 'react-router-dom';
import Login from './function/LoginForm';
import Registretion from './function/RegistrationForm';

import { AuthProvider } from './AuthContext';
import AppContent from './AppContent';

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

const App = () => {

  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path='/*' element={<AppContent/>}/>
        <Route path='/Authrization/*' element={<Authorization />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;