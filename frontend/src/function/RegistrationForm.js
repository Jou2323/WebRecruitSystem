import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const RegistrationForm = ({ onRegistrationSuccess }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
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
    <body class="bg-gradient-primary">
        <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-2">
            <div class="card-body p-0">
                    <div class="row">
                    <div class="col-lg-7 col-xl-12">
                        <div class="p-5">
                            <div class="p-5">
                                <div class="text-center">
                                    <h4 class="text-dark mb-4">Create an Account!</h4>
                                </div>
                                
                                <form onSubmit={handleRegistration}>
                                    <div class="row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange}/></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="text" id="lastName" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange}/></div>
                                    </div>
                                    <div class="mb-3"><input class="form-control form-control-user" type="login" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="login" value={formData.login} onChange={handleInputChange}/></div>
                                    <div class="row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}/></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password" value={formData.password} onChange={handleInputChange}/></div>
                                    </div><button class="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                    <hr/><a class="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button"><i class="fab fa-google"></i>&nbsp; Register with Google</a><a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button"><i class="fab fa-facebook-f"></i>&nbsp; Register with Facebook</a>
                                    <hr/>
                                </form>
                                <div class="text-center"><button class="small" type="button">Forgot Password?</button></div>
                                <div class="text-center"><button class="small" type="button">Already have an account? Login!</button></div>

                </div>
            </div>           
        </div>
</div>
</div>
</div>
</div>

        </body>  
    
  );
};

export default RegistrationForm;
