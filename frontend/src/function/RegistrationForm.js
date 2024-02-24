import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = ({ onRegistrationSuccess }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', formData);
      const { token } = response.data;

      // Збереження Bearer Token
      onRegistrationSuccess(token);
      navigate("/Authrization/Login");
    } catch (error) {
      console.error('Registration failed:', error);
      // Обробка помилок реєстрації
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <label>Email:
        <input type="login" name="login" value={formData.login} onChange={handleInputChange} />
      </label>

      <label>Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
