
import React, { useEffect,useState } from 'react';
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
import ProfileForm from './ProfileForm';
import { useLocation } from 'react-router-dom';
import ImageUpload from '../function/ImageUpload';
import '../App.css'
const Profile = () => {
    const { token } = useAuth();
    const location = useLocation();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      if (token) {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/profile', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (response.ok) {
              const data = await response.json();
              setUserData(data);
            } else {
              // Обробка помилок
            }
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        };
    
        fetchData();
      }
    }, [location,token]);
    return(
                <div class="container-fluid">
                    <h3 class="text-dark mb-4">Profile</h3>
                    <div class="row mb-3">
                        <div class="col-lg-4">
                        {userData && userData.profileIcon ? (
    <img src={`data:image/jpeg;base64,${userData.profileIcon}`} alt="Profile Icon" />
) : (
    <p>Loading...</p>
)}
                            <div class="card mb-3">
                                <ImageUpload/>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow mb-3">
                                        <div class="card-header py-3">
                                            <p class="text-primary m-0 fw-bold">User Settings</p>
                                        </div>
                                        <div class="card-body">
                                        <div>
                                        {userData ? (
        <div id="profile">
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
          <p>Login: {userData.login}</p>
          {/* Додайте інші дані профілю */}
          <ProfileForm userData={userData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
                      </div>
                      </div>
                                        </div>
                                    </div>
                                    <div class="card shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
       
    );
                                    
};
export default Profile;
