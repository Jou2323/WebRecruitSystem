import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
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
    
<body class="bg-gradient-primary">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
        <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="row">
                            <div class="col-lg-6 col-xl-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-black mb-4">Welcome Back!</h4>
                                    </div>
                                    
                                    <form onSubmit={handleLogin}>
                                    <div class="mb-3"><input class="form-control form-control-user" type="login" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Login Address..." name="login" value={formData.login} onChange={handleInputChange} /></div>
                                    <div class="mb-3"><input class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} /></div>
                                        <div class="mb-3">
                                        
                                        </div><button class="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
                                        <hr/>
                                        <a className="btn btn-danger d-block btn-google btn-user w-100 mb-2" role="button"><FaGoogle />&nbsp; Login with Google</a>
                                        <a class="btn btn-primary d-block btn-facebook btn-user w-100 " role="button"><FaFacebook />&nbsp; Login with Facebook</a>
                                        <hr/>
                                    </form>

                                    <hr/>
                                    <div class="text-center"><Link class="nav-link"  to="/Profile">New Password</Link></div>
                                    <div class="text-center"><Link class="nav-link"  to="/Registretion">Create new account!</Link></div>
                                </div>
                            </div>
             </div>
             </div>
                            </div>
        </div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/theme.js"></script>

    </body>


   
  );
};

export default LoginForm;
