import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
export default function EditVacancy() {
  let navigate = useNavigate();
  const { token, logout } = useAuth();
  const locations = useLocation();
  const { id } = useParams();

  const [vacancy,setVacancy]=useState({
    title:"" ,
    description:"",
    location:"",
    cost:"",
    work_table:"",
    year_exp:"",
    requirements: "",
    responsibilities: "",
    status: ""

})
const {title,description,location,cost,year_exp,work_table,requirements,responsibilities, status} = vacancy
useEffect(() => {
  if (token) {
  loadUser();
}}, [locations, token]);

  const onInputChange = (e) => {
    setVacancy({ ...vacancy, [e.target.name]: e.target.value });
  };

  

  const onSubmitUpdate = async (e) => {
    try{
    e.preventDefault();
    await axios.put(`http://localhost:8080/vacancies/${id}`,vacancy, {
      headers: {
          'Authorization': `Bearer ${token}`
        }});
    navigate("/Vacancy");
  } catch (error) {
    console.error('Error loading vacancy:', error);
    if (error.response && error.response.status === 401) {
      // Якщо токен протух або не дійсний, виконайте вихід
      logout();
    }
  }
  };

  const loadUser = async () => {
    try{
    const result = await axios.get(`http://localhost:8080/vacancies/${id}`, {
      headers: {
          'Authorization': `Bearer ${token}`
        }});
    setVacancy(result.data);
  } catch (error) {
    console.error('Error loading candidates:', error);
    if (error.response && error.response.status === 401) {
      // Якщо токен протух або не дійсний, виконайте вихід
      logout();
    }
  }
  };

  return (

   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Vacancy</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
            
            <label class="form-label">Title</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Description</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter description'
                                    name = "description"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "488px", height: "104px"}} value={description} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Location</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter location'
                                    name = "location" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "487px", height: "42px"}} value={location} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Cost</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter cost'
                                    name = "cost" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value={cost} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Year expiriees</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter year_exp'
                                    name = "year_exp" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value = {year_exp} onChange={(e)=>onInputChange(e)}/>
                                   
                                   <label class="form-label">Time Work</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter work_table'
                                    name = "work_table" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value = {work_table} onChange={(e)=>onInputChange(e)}/>

                                    <label class="form-label" style={{width: "510px"}}>Requirements</label><textarea
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter requirements'
                                    name = "requirements" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "111px"}} value={requirements} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Responsibilities</label><textarea  type={"text"} 
                                    className="form-control"
                                    placeholder='Enter responsibilities'
                                    name = "responsibilities" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "488px"}} value={responsibilities} onChange={(e)=>onInputChange(e)}></textarea>
                                    
                                    <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Status</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "status" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                                <option value="Open">Open</option>
                                                <option value="Wait">Wait</option>
                                                <option value="Close">Close</option>
                                            </optgroup>
                                    </select>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Vacancy">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}