import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

const VacancyList = () => {
  const [vacancies, setVacancies] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  let navigate = useNavigate();
  const [candidateData, setCandidateData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    yearsOfExperience: 0,
    skills: '',
    motivationLetter: '',
    position: ''
  });
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
  };
  // Import necessary libraries



// Implement the file upload UI and call handleFileUpload when needed

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('resumeFile', selectedFile);
  formData.append('name', candidateData.name);
  formData.append('email', candidateData.email);
  formData.append('phoneNumber', candidateData.phoneNumber);
  formData.append('yearsOfExperience', candidateData.yearsOfExperience);
  formData.append('skills', candidateData.skills);
  formData.append('motivationLetter', candidateData.motivationLetter);
  formData.append('position', candidateData.position);

  try {
    const response = await axios.post('http://localhost:8080/candidates/appresume', formData);
    console.log('Resume submitted successfully', response);

    toast.success('Резюме відправлено успішно!', {
      position: 'top-right',
      autoClose: 3000, // час автоматичного закриття сповіщення (у мілісекундах)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    $(`#modal-${vacancies.id}`).modal('hide');
    navigate("/User/Vacancy");
  } catch (error) {
    console.error('Error submitting resume', error);
  }
};


  useEffect(() => {
    
    // Fetch the list of vacancies from your API
    axios.get('http://localhost:8080/vacancies/vacancys')
      .then(response => setVacancies(response.data))
      .catch(error => console.error('Error fetching vacancies', error));
  }, []);
  
  
  return (
    
    <main class="page pricing-table-page">
         
    <section class="clean-block clean-pricing dark">
        
        <div class="container">
     
            <div class="block-heading">
                <h2 class="text-info">Vacancy List</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col">
                    <div class="row toplist" id="toplist-1">
                        <div class="col">
                            <div class="card shadow">
                                <div class="card-header py-3">
                                    <p class="text-primary m-0 fw-bold">List vacancy</p>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 col-xl-6 offset-xl-0 text-nowrap">
                                            <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                                        <option value="10" selected="">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>&nbsp;</label></div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                        </div>
                                    </div>
                                    <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                        <table class="table my-0" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Postition</th>
                                                    <th>Salary</th>
                                                    <th class="text-center">Work time</th>
                                                    <th class="text-center">Inforamation</th>
                                                    <th class="text-center">Report Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {vacancies.map(vacancy => (
            <tr key={vacancy.id}>
             
              <td>{vacancy.title}</td>
              <td>{vacancy.cost}</td>
              <td>{vacancy.work_table}</td>
              <td>
              
              <Link
    class="btn btn-primary"
    role="button"
    style={{ marginTop: '12px', marginBottom: '14px', marginLeft: '0px', marginRight: '2px', paddingRight: '10px' }}
    to={`/User/ViewVacancyUser/${vacancy.id}`}
  >
    Info
  </Link>
              </td>
              <td>
           
              <button
                className="btn btn-primary col-sm-2"
                type="button"
                style={{ color: 'white', width: '107px', marginTop: '14px' }}
                data-bs-target={`#modal-${vacancy.id}`}
                data-bs-toggle="modal"
            
              >
                Send letter
              </button>
              <div className="modal fade" role="dialog" tabIndex="-1"  id={`modal-${vacancy.id}`}>
     <div class="modal-dialog" role="document">
                                  
                                  <div class="modal-content">
                                      
                                      <div class="modal-header">
                                     
                                          <h4 class="modal-title">Create Vacancy</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                      </div>
                                      <form onSubmit={(e)=>handleSubmit(e)}>
                                      <div class="modal-body">
                                      <label class="form-label">Name</label><input 
                                      type={"text"} 
                                      className="form-control"
                                      placeholder='Enter name'
                                      name = "name"
                                      style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '387px', height: '51px'}} 
                                      value={candidateData.name} 
                                      onChange={(e)=>handleChange(e)}/>
                                      <label class="form-label">Email</label><textarea 
                                      type={"text"} 
                                      className="form-control"
                                      placeholder='Enter email'
                                      name = "email"
                                      style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}} value={candidateData.email} onChange={(e)=>handleChange(e)}></textarea>
                                      <label class="form-label">phoneNumber</label><input type={"text"} 
                                      className="form-control"
                                      placeholder='Enter phoneNumber'
                                      name = "phoneNumber" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={candidateData.phoneNumber} onChange={(e)=>handleChange(e)}/>
                                      <label class="form-label">yearsOfExperience</label><input type={"text"} 
                                      className="form-control"
                                      placeholder='Enter yearsOfExperience'
                                      name = "yearsOfExperience" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={candidateData.yearsOfExperience} onChange={(e)=>handleChange(e)}/>
                                      <label class="form-label">Year skills</label><textarea type={"text"} 
                                      className="form-control"
                                      placeholder='Enter skills'
                                      name = "skills" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={candidateData.skills} onChange={(e)=>handleChange(e)}></textarea>
                                      <label class="form-label">Motivation Letter</label><textarea type={"text"} 
                                      className="form-control"
                                      placeholder='Enter motivationLetter'
                                      name = "motivationLetter" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={candidateData.motivationLetter} onChange={(e)=>handleChange(e)}></textarea>
                                      <label class="form-label" style={{width: "510px"}}>Position</label><textarea
                                      type={"text"} 
                                      className="form-control"
                                      placeholder='Enter position'
                                      name = "position" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "386px", height: "111px"}} value={candidateData.position} onChange={(e)=>handleChange(e)}></textarea>
                                       <label class="form-label">Resume</label>
                                       <input type="file" name="resumeFile" onChange={(e) => handleFileChange(e)} />
                                      </div>
      <div className="modal-footer">
        <button className="btn btn-success" type="submit" onClick={handleSubmit} >
          Submit Resume
        </button>
        </div></form></div></div></div>
              </td>
            </tr>
          ))}</tbody>
                                            <tfoot>
                                                <tr>
                                                    <td><strong>Position</strong></td>
                                                    <td><strong>Salary</strong></td>
                                                    <td><strong class="d-xl-flex justify-content-xl-center">Work time</strong></td>
                                                    <td><strong class="d-xl-flex justify-content-xl-center">Info</strong></td>
                                                    <td><strong class="text-center d-xl-flex justify-content-xl-center"><br/><strong>Report&nbsp;</strong></strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 align-self-center">
                                            <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                        </div>
                                        <div class="col-md-6">
                                            <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                                <ul class="pagination">
                                                    <li class="page-item disabled"><span aria-hidden="true">«</span></li>
                                                    <li class="page-item active">1</li>
                                                    <li class="page-item">2</li>
                                                    <li class="page-item">3</li>
                                                    <li class="page-item"><span aria-hidden="true">»</span></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ToastContainer />
</main>
  );
};

const VacancyUser = () => {
  return (
    <div>
      <VacancyList/>
    </div>
  );
};

export default VacancyUser;
   
