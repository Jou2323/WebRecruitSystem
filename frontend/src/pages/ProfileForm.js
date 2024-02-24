// ProfileForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
const ProfileForm = ({ userData }) => {
    const { token, logout } = useAuth();
  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    login: userData.login,
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Виконайте логіку відправки форми на бекенд
    try {
      const response = await fetch('http://localhost:8080/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Обробка успішного оновлення профілю
      } else {
        // Обробка помилок
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Login:
        <input type="text" name="login" value={formData.login} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
