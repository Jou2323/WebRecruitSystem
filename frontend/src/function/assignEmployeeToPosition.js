import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation} from "react-router-dom";
import { useAuth } from '../AuthContext';
export default function AsassignEmployeeToPosition() {
  let navigate = useNavigate();
  const { token, logout } = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const [positionest,setPosition]=useState({
    domainemployeer:"",
    nick:"" 
})
const {domainemployeer, nick} = positionest

  const onInputChange = (e) => {
    setPosition({ ...positionest, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (token) {
    loadUser();
    loadEmployee(); 
  }
}, [location, token]);

  const onSubmitUpdate = async (e) => {
    try{
    e.preventDefault();
    await axios.put(`http://localhost:8080/positions/${id}`,positionest, {
      headers: {
          'Authorization': `Bearer ${token}`
        }});
  } catch (error) {
    console.error('Error loading candidates:', error);
    if (error.response && error.response.status === 401) {
      // Якщо токен протух або не дійсний, виконайте вихід
      logout();
    }
  }
    navigate("/Position");
  };


  const loadUser = async () => {
    try{
    const result = await axios.get(`http://localhost:8080/positions/${id}`, {
      headers: {
          'Authorization': `Bearer ${token}`
        }
    });
    setPosition(result.data);
  } catch (error) {
    console.error('Error loading candidates:', error);
    if (error.response && error.response.status === 401) {
      // Якщо токен протух або не дійсний, виконайте вихід
      logout();
    }
  }
  };

const [employees,setEmployee]=useState([])
  const loadEmployee= async ()=>{
    try{
    const result= await axios.get("http://localhost:8080/employee/employees", {
      headers: {
          'Authorization': `Bearer ${token}`
        }
    });
    setEmployee(result.data);
  } catch (error) {
    console.error('Error loading position:', error);
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
          <h2 className="text-center m-4">Asassign Employee To Position</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
          <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Domain employeer</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "domainemployeer" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={domainemployeer} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                     {
    employees.map((employee)=>(
      <option value={employee.domain_gmail}>{employee.domain_gmail} </option>
    ))
    }
                                            </optgroup>
                                    </select>
                                    <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Nickname employeer</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "nick" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={nick} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                     {
    employees.map((employee)=>(
      <option value={employee.nickname}>{employee.nickname} </option>
    ))
    }
                                            </optgroup>
                                    </select>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Position">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}