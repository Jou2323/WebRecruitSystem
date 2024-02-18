import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    let navigate = useNavigate();
    const [recruiter, setRecruiter] = useState({
        email: "",
        password: ""
    });
    const {email,password} = recruiter;
    const onInputChange = (e) =>{
        setRecruiter({...recruiter, [e.target.name]: e.target.value});
       }
       const onSubmitAdd = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/recruiters/login", { email, password })
        navigate("/Homepages");
    };
    return(
        
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
                                    <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="mb-3"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" value={email} onChange={(e)=>onInputChange(e)}/></div>
                                    <div class="mb-3"><input class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={password} onChange={(e)=>onInputChange(e)}/></div>
                                        <div class="mb-3">
                                            <div class="custom-control custom-checkbox small">
                                                <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"/><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                            </div>
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
export default Login;