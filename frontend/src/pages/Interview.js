import React, { useEffect, useState, useCallback  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
import "../App.css"
function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
  }
    
export default function Interview() {
    const { token, logout } = useAuth();
  const location = useLocation();
    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [interviews, setInterviews]=useState([]) 
    const [candidates,setCandidates]=useState([])
   
    const [interview,setInterview]=useState({
        title:"",
        email:"" ,
        status:"",
        candidateId: "",
        dateAndTime:"",
        eventLink:""

    })
    const {title,email,status,candidateId,dateAndTime, eventLink} = interview
   
    const onInputChange = (e) =>{
        setInterview({...interview, [e.target.name]: e.target.value});
    }
    const onSubmitAdd=async (e)=>{
        try{
        e.preventDefault();
        await axios.post("http://localhost:8080/interviews/addinterview",interview, {
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        navigate("/Interview");
    }catch (error) {
        console.error('Error loading interview:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
       };

   
    
     
    
    const loadCandidates = useCallback(async () => {
        try{
        const result= await axios.get("http://localhost:8080/candidates/candidatesall", {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setCandidates(result.data);
    }catch (error) {
        console.error('Error loading position:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    }, [token, logout]);
   
    
    const loadInterview = useCallback(async () => {
        try{
        const result= await axios.get("http://localhost:8080/interviews/interviewAll", {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setInterviews(result.data);
    }catch (error) {
        console.error('Error loading interview:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    }, [token, logout]);

    const deleteInterview=async (id)=>{
        try{
        await axios.delete(`http://localhost:8080/interviews/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        loadInterview()
    }catch (error) {
        console.error('Error loading interview:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    };
    useEffect(() => {
        if (token) {
            loadInterview();
            loadCandidates();
        }
    }, [location, token, loadInterview, loadCandidates]);
    const onSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredInterview = interviews.filter((interview) =>
    interview.title.toLowerCase().includes(searchTerm.toLowerCase())
);    
    return(
     
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
<div class="container-fluid">


<div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
<div class="modal-dialog" role="document">
                                
                                <div class="modal-content">
                                    
                                    <div class="modal-header">
                                   
                                        <h4 class="modal-title">Create Interview</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="modal-body">
                                    
                                    <label class="form-label">Title</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={title} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Email</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter email'
                                    name = "email"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '387px', height: '51px'}} 
                                    value={email} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">dateAndTime</label><input 
                                    type={"date"} 
                                    className="form-control"
                                    name = "dateAndTime"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}} value={dateAndTime} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">eventLink</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter eventLink'
                                    name = "eventLink" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={eventLink} onChange={(e)=>onInputChange(e)}/>
                                   <label class="form-label" style={{paddingLeft: "17px", paddingRight: "374px", paddingTop: "8px"}}>Candidate</label><select 
                                    type={"text"} 
                                    className="form-control"
                                    name = "candidateId" style={{paddingBottom: "0px", marginBottom: "10px", paddingRight: "0px", marginRight: "216px", marginLeft: "15px", paddingLeft: "0px", width: "240px"}} value={candidateId} onChange={(e)=>onInputChange(e)}>
      <optgroup label="Select id">
    {
    candidates.map((candidate)=>(
      <option value={candidate.id}>{candidate.id}</option>
    ))
    }
    </optgroup></select>
                                   
                                    <label class="form-label" style={{paddingLeft: "17px", paddingRight: "374px", paddingTop: "8px"}}>Status</label><select 
                                    type={"text"} 
                                    className="form-control"
                                    name = "status" style={{paddingBottom: "0px", marginBottom: "10px", paddingRight: "0px", marginRight: "216px", marginLeft: "15px", paddingLeft: "0px", width: "240px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="This is a group">
                                               <option value="Open">Open</option>
                                                <option value="Wait">Wait</option>
                                                <option value="Close">Close</option>
                                            </optgroup></select>
                                            <a class="btn btn-link d-block btn-google w-100" target="blank" href="https://meet.google.com/" role="button"><i class="fab fa-google"></i>&nbsp;Google Meet</a>
                                    </div>
        
                                    <div class="modal-footer"><Link class="btn btn-light"  data-bs-dismiss="modal" to="/Interview">Close</Link><button class="btn btn-primary" type="submit">Create</button></div></form>  
                                </div> 
                        </div> 
                         
    </div>
<div class="row">
        <h2 class="text-dark mb-4 aligh-left col-sm-2" >List Interview</h2>
        <button class="btn btn-primary col-sm-2 " type="submit" style={{ color: 'white', marginLeft: '-1px', marginBottom : '11px' }}  data-bs-target="#modal-1" data-bs-toggle="modal">Create Interview</button>
</div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Interview information</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 col-xl-1 offset-xl-5 text-nowrap">
                                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div class="col-md-6">
    <div class="text-md-end dataTables_filter" id="dataTable_filter">
        <label class="form-label">
            <input
                type="search"
                class="form-control form-control-sm"
                aria-controls="dataTable"
                placeholder="Search"
                value={searchTerm}
                onChange={onSearchInputChange}
            />
        </label>
    </div>
</div>
                            </div>
                            <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>IP</th>
                                            <th>Title</th>
                                            <th>Candidate Email</th>
                                            <th>dateAndTime</th>
                                            <th>Status</th>
                                            <th class="text-center" style={{width:"200px"}}>Update</th>
                                            <th class="text-center" style={{width:"200px"}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            filteredInterview.map((interview)=>(
                                                <tr>
                                            <td class="me-xl-0"  >{interview.id}</td>
                                            <td> {interview.title}</td>
                                            <td style={{whiteSpace: "pre"}}>{interview.email}</td>
                                            <td>{interview.dateAndTime}</td>
                                            <td class="text-center">{interview.status}</td>
                                            <Link class="btn btn-primary" style={{marginTop: '21px',marginBottom: '21px', marginLeft: '15px', background: rgb(223,182,78)}} to={`/Interview/${interview.id}`}><span class="text-white-50 icon" style={{paddingright: '0px', marginright: '11px'}}><i class="fas fa-exclamation-triangle"></i></span>Update interview</Link>
                                            <td class="text-center"><button class="btn btn-primary" onClick={()=>deleteInterview(interview.id)} style={{marginTop: '15px',marginBottom: '21px', marginLeft: '11px', background: rgb(223,87,78)}}><span class="text-white-50 icon" style={{marginRight: '5px' }}><i class="fas fa-trash" ></i></span>Delete interview</button></td>
                                        </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Title</strong></td>
                                            <td><strong>Candidate Email</strong></td>
                                            <td><strong>dateAndTime</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td><strong>Update</strong></td>
                                            <td class="text-center"><strong>Delete</strong></td>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
    )
                                    
}
