import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
    const [recruiters, setRecruiters] = useState([]);
    const [selectedRecruiterId, setSelectedRecruiterId] = useState('');
    const [recruiter, setRecruiterData] = useState({
        domain: '',
        email: '',
        firstname: '',
        secondname: '',
      })
      const {domain,email,firstname,secondname} = recruiter

      useEffect(() => {
        // Загрузите данные всех рекрутеров с сервера
        fetch('http://localhost:8080/recruiters/all_recruiter')
          .then(response => response.json())
          .then(data => {
            // Установите полученные данные в состояние
            setRecruiters(data);
            // Если у вас есть данные, выберите первого рекрутера
            if (data.length > 0) {
              setSelectedRecruiterId(data[0]._id); // Замените '_id' на актуальное поле идентификации в вашей модели данных
            }
          })
          .catch(error => {
            console.error('Ошибка при получении данных о рекрутерах:', error);
          });
      }, []);
      useEffect(() => {
        // Если выбран какой-то рекрутер, загрузите его данные
        if (selectedRecruiterId) {
          fetch(`http://localhost:8080/recruiters/${selectedRecruiterId}`)
            .then(response => response.json())
            .then(data => {
              // Установите данные рекрутера в состояние
              setRecruiterData(data);
            })
            .catch(error => {
              console.error('Ошибка при получении данных о рекрутере:', error);
            });
        }
      }, [selectedRecruiterId]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecruiterData({
          ...recruiter,
          [name]: value,
        });
      };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        // Make API request to update recruiter profile without using ID
        await axios.put('http://localhost:8080/recruiters/edit', recruiter)
          .then(response => {
            console.log('Profile updated successfully:', response.data);
            // You can add a success message or redirect the user after a successful update
          })
          .catch(error => {
            console.error('Error updating profile:', error);
            // Handle error and display a message to the user if needed
          });
      };
     
    

    return(

                <div class="container-fluid">
                    <h3 class="text-dark mb-4">Profile</h3>
                    <div class="row mb-3">
                        <div class="col-lg-4">
                            <div class="card mb-3">
                                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" src="dogs/image2.jpeg" width="160" height="160"/>
                                    <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                </div>
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
                                        <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="domain">
                        <strong>Domen</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="domain"
                        placeholder="recruter.domain"
                        name="domain"
                        value={domain}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        <strong>Email Address</strong>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="user@example.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="first_name">
                            <strong>First Name</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="first_name"
                            placeholder="First name"
                            name="firstname"
                            value={firstname}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="last_name">
                            <strong>Last Name</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="last_name"
                            placeholder="Last name"
                            name="secondname"
                            value={secondname}
                            onChange={handleInputChange}
                          />
                          </div>
                      </div>
                    </div>
                                         <div className="mb-3">
                      <button className="btn btn-primary btn-sm" type="submit">
                        Save Settings
                      </button>
                    </div>
                                        </form>
                                        </div>
                                    </div>
                                    <div class="card shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
    );
                                    
}