import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js

export default function ViewResume() {

    const { token, logout } = useAuth();
    const location = useLocation();
    
    const [candidate,setVacancy]=useState({
        id:"",
        name:"" ,
        email:"",
        phoneNumber:"",
        yearsOfExperience:"",
        skills:"",
        file:"",
        motivationLetter: "",
        status: "",
        position: "",
        lastUpdated:""
    })

    const {id} = useParams()

    useEffect(() => {
        if (token) {
        loadResume();  
    }}, [location, token])
const handleFileDownload = async () => {
    try {
        // Make an API call to download the file
        const response = await axios.get(`http://localhost:8080/candidates/downloadFile/${id}`, {
             responseType: 'arraybuffer' ,
             headers: {
                 'Authorization': `Bearer ${token}`
             }
            });

        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create a download link and trigger a click to download the file
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        // Handle error
        console.error(error);
    }
};

    const loadResume= async ()=>{
        try{
        const result= await axios.get(`http://localhost:8080/candidates/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setVacancy(result.data);
    }catch (error) {
        console.error('Error loading resume:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    }
    

    return(
        <div class="container">
        <div class="row">
                <div class="col-xxl-10">
                        <div class="card shadow mb-3">
                             <div class="card-header py-3" style={{marginbottom : '-17px', margintop: '0px', height: '150.594px'}}>
                                  <div class="container" style={{margin: '-14px', margintop: '-4px'}}>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '21px'}}><span>Email:</span> {candidate.email}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Skills:</span> {candidate.skills} </span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Name:</span>{candidate.name}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Years expiriens:</span> {candidate.yearsOfExperience} year</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Phone:</span> {candidate.phoneNumber}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>ID:</span> {candidate.id}</span>
                            </div>
                        </div>
                        
                        
                        <div class="card-body">
                            <h3 class="text-dark mb-4"  style={{height: '30.5938px', margin: '0px', marginTop: '29px', marginRight: '-1px', marginLeft: '9px'}}>{candidate.position}</h3>
                            <div class="card-header d-flex d-xl-flex flex-row justify-content-xl-start py-3">
                            <span style={{display: 'flex', justifyContent: 'flex-start'}}>{candidate.motivationLetter}</span>
                        </div>
                        </div>     
                        <p class="d-xl-flex justify-content-xl-center align-items-xl-center" style={{paddingright: '0px', marginright: '12px'}}>Resume:</p>
                        <p class="d-xl-flex justify-content-xl-center align-items-xl-center" style={{ paddingright: '0px', marginright: '12px' }}>
        <a onClick={handleFileDownload} download="resume.pdf" class="btn btn-primary">
          Download Resume
        </a>
      </p>

                        <div class="d-flex flex-column ms-auto justify-content-xl-center align-items-xl-center" style={{width: '110.406px',paddingleft: '0px', paddingright: '0px', marginright: '36px;'}}><Link to="/MessageTest"><button class="btn btn-primary flex-column" type="button" style={{position: 'relative', marginright: '-36px',marginBottom: '12px'}}>Send Test</button></Link></div>  </div>   
                </div>
            </div>
</div>
        
    )
}