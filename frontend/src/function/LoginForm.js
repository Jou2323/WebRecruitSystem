import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = ({ onLoginSuccess }) => {
  let navigate = useNavigate();
  const [token, setToken] = useState('');
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      const token = response.data.token;
      // Збереження Bearer Token
      localStorage.setItem('token', token);
      onLoginSuccess(token);
      navigate("/Homepage");
    } catch (error) {
      console.error('Login failed:', error);
      // Обробка помилок входу
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email:
        <input type="login" name="login" value={formData.login} onChange={handleInputChange} />
      </label>

      <label>Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
