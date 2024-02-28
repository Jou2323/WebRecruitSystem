import React, { useEffect, useState, useCallback  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
  }
    
export default function Position() {
    
    let navigate = useNavigate();
    const { token, logout } = useAuth();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
   
    const [employee,setEmployee]=useState({
        email:"",
        domain_gmail:"",
        phone:"",
        position:"",
        nickname:"",
        status: "",
        name:"",
        StartDate:""
       
    })
    const {name, email, domain_gmail, phone, position, nickname ,status, StartDate} = employee
    
    const [positionest,setPosition]=useState({
        title:"",
        start_work:"",
        end_work:"",
        requirements:"",
        status:"",
        domainemployeer:"",
        nick:""
    })
    const {title, start_work, end_work, requirements, status_position} = positionest
   
   
    const onInputChange = (e) =>{
     setEmployee({...employee, [e.target.name]: e.target.value});
    }
    const onInputChange2 = (e) =>{
        setPosition({...positionest, [e.target.name]: e.target.value});
       }

    const onSubmitAdd=async (e)=>{
        try{
        e.preventDefault();
        await axios.post("http://localhost:8080/employee/addemployee",employee, {
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        navigate("/Position");
    }catch (error) {
        console.error('Error loading employee:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
       };

   const onSubmitAdd2=async (e)=>{
    try{
        e.preventDefault();
        await axios.post("http://localhost:8080/positions/create_position",positionest, {
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        navigate("/Position");
    }catch (error) {
        console.error('Error loading position:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }};

    const [employees,setEmployees]=useState([])
const [positionests,setPositions]=useState([])

 
    
const loadEmployee = useCallback(async () => {
        try{
        const result= await axios.get("http://localhost:8080/employee/employees", {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setEmployees(result.data);
    }catch (error) {
        console.error('Error loading employee:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    }, [token, logout]);
    const loadPosition = useCallback(async () => {
        try{
        const result= await axios.get("http://localhost:8080/positions/allposition", {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setPositions(result.data);
    }catch (error) {
        console.error('Error loading position:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    }, [token, logout]);
    const deleteEmployee=async (id)=>{
        try{
        await axios.delete(`http://localhost:8080/employee/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        loadEmployee()
    }catch (error) {
        console.error('Error loading employee:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    };
    const deletePosition=async (id)=>{
        try{
        await axios.delete(`http://localhost:8080/positions/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        loadPosition()
    }catch (error) {
        console.error('Error loading position:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    };
    useEffect(() => {
        if (token) {
        loadEmployee();  
        loadPosition();
    }}, [location, token, loadEmployee, loadPosition]);
    
    const onSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const onSearchInputChange2 = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredPosition = positionests.filter((positionest) =>
    positionest.title.toLowerCase().includes(searchTerm.toLowerCase())
);   
const filteredEmployee = employees.filter((employee) =>
employee.position.toLowerCase().includes(searchTerm.toLowerCase())
);   

    return(
     
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
<div class="container-fluid">


<div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
<div class="modal-dialog" role="document">
                                
                                <div class="modal-content">
                                    
                                    <div class="modal-header">
                                   
                                        <h4 class="modal-title">Add Employee</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="modal-body">
                                    <label class="form-label">Full Name</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter full name'
                                    name = "name"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}}  value={name} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Email</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter email'
                                    name = "email"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}} value={email} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Domain email</label><input  required type={"text"} 
                                    className="form-control"
                                    placeholder='Enter domain email'
                                    name = "domain_gmail" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={domain_gmail} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Phone</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter phone'
                                    name = "phone" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={phone} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Position</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter position'
                                    name = "position" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={position} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Nickname</label><input type={"nickname"} 
                                    className="form-control"
                                    placeholder='Enter nickname'
                                    name = "nickname" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={nickname} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Date</label><input type={"date"} 
                                    className="form-control"
                                    placeholder='Enter date'
                                    name = "StartDate" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={StartDate} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label" style={{paddingLeft: "17px", paddingRight: "374px", paddingTop: "8px"}}>Status</label><select 
                                    type={"text"} 
                                    className="form-control"
                                    name = "status" style={{paddingBottom: "0px", marginBottom: "10px", paddingRight: "0px", marginRight: "216px", marginLeft: "15px", paddingLeft: "0px", width: "240px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="This is a group">
                                               <option value="Open">Open</option>
                                                <option value="Wait">Wait</option>
                                                <option value="Close">Close</option>
                                            </optgroup></select>
                                    </div>
        
                                    <div class="modal-footer"><Link class="btn btn-light"  data-bs-dismiss="modal" to="/Position">Close</Link><button class="btn btn-primary" type="submit">Create</button></div></form>  
                                </div> 
                        </div> 
                         
    </div>
<div class="modal fade" role="dialog" tabindex="-2" id="modal-2">
<div class="modal-dialog" role="document">
                                
                                <div class="modal-content">
                                    
                                    <div class="modal-header">
                                   
                                        <h4 class="modal-title">Add Position</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form onSubmit={(e)=>onSubmitAdd2(e)}>
                                    <div class="modal-body">
                                    <label class="form-label">Title</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}}  value={title} onChange={(e)=>onInputChange2(e)}></textarea>
                                    <label class="form-label">Start work</label><input 
                                    type={"date"} 
                                    className="form-control"
                                    placeholder='Enter start wrk'
                                    name = "start_work"
                                    style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={start_work} onChange={(e)=>onInputChange2(e)}/>
                                    <label class="form-label">End work</label><input  required type={"date"} 
                                    className="form-control"
                                    placeholder='Enter end work'
                                    name = "end_work" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={end_work} onChange={(e)=>onInputChange2(e)}/>
                                    <label class="form-label">Requirements</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter requirements'
                                    name = "requirements" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={requirements} onChange={(e)=>onInputChange2(e)}/>
                                    <label class="form-label" style={{paddingLeft: "17px", paddingRight: "374px", paddingTop: "8px"}}>Status</label><select 
                                    type={"text"} 
                                    className="form-control"
                                    name = "status" style={{paddingBottom: "0px", marginBottom: "10px", paddingRight: "0px", marginRight: "216px", marginLeft: "15px", paddingLeft: "0px", width: "240px"}} value={status_position} onChange={(e)=>onInputChange2(e)}>
                                     <optgroup label="This is a group">
                                               <option value="Approve">Approve</option>
                                                <option value="Progress">Progress</option>
                                                <option value="No Approve">No Approve</option>
                                            </optgroup></select>
                                    </div>
        
                                    <div class="modal-footer"><Link class="btn btn-light"  data-bs-dismiss="modal" to="/Position">Close</Link><button class="btn btn-primary" type="submit">Create</button></div></form>  
                                </div> 
                        </div> 
                         
    </div>
<div class="row">
        <h2 class="text-dark mb-4 aligh-left col-sm-2" >Position</h2>
       
</div>
                    <div class="card shadow">
                        
                    <div class="card-header d-xl-flex justify-content-xl-start align-items-xl-start py-3">
                            <h3 class="text-dark mb-4">List Employer</h3><button class="btn btn-primary mb-xl-3 ms-xl-2" type="button" data-bs-target="#modal-1" data-bs-toggle="modal">Add Employer</button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                          
                                <div class="col-md-12 text-nowrap">
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
                                            <th class="text-center">Employer name</th>
                                            <th class="text-center">Email</th>
                                            <th class="text-center">Domain email</th>
                                            <th class="text-center">Contact</th>
                                            <th class="text-center">Position</th>
                                            <th class="text-center">Nickname</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center" style={{width:"200px"}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            filteredEmployee.map((employee)=>(
                                                <tr>
                                            <td class="me-xl-0" >{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td style={{whiteSpace: "pre"}}>{employee.email}</td>
                                            <td>{employee.domain_gmail}</td>
                                            <td class="text-center pe-xl-2 me-xl-0" style={{width: '81.5px', height: '58px', margin: '0px'}}>{employee.phone}</td>
                                            <td class="text-center">{employee.position}</td>
                                            <td class="text-center">{employee.nickname}</td>
                                            <td class="text-center">{employee.status}</td>
                                            <td class="text-center"><button class="btn btn-primary" onClick={()=>deleteEmployee(employee.id)} style={{marginTop: '15px',marginBottom: '21px', marginLeft: '11px', background: rgb(223,87,78)}}><span class="text-white-50 icon" style={{marginRight: '5px' }}><i class="fas fa-trash" ></i></span>Delete</button></td>
                                        </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Employer name</strong></td>
                                            <td><strong>Email user</strong></td>
                                            <td><strong>Domain email</strong></td>
                                            <td><strong>Contact</strong></td>
                                            <td><strong>Position</strong></td>
                                            <td><strong >Nickname</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td class="text-center"><strong>Delete</strong></td>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            
                        </div>
                    </div>

                    <div class="card shadow">
                        
                    <div class="card-header d-xl-flex justify-content-xl-start align-items-xl-start py-3">
                            <h3 class="text-dark mb-4">List Position</h3><button class="btn btn-primary mb-xl-3 ms-xl-2" type="button" data-bs-target="#modal-2" data-bs-toggle="modal">Add Position</button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                          
                                <div class="col-md-12 text-nowrap">
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
                aria-controls="dataTable2"
                placeholder="Search"
                value={searchTerm}
                onChange={onSearchInputChange2}
            />
        </label>
    </div>
</div>
                            </div>
                            <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable2">
                                    <thead>
                                        <tr>
                                            <th>IP</th>
                                            <th class="text-center">Position</th>
                                            <th class="text-center">Date start</th>
                                            <th class="text-center">Date end</th>
                                            <th class="text-center">Email domain</th>
                                            <th class="text-center">Nickname</th>
                                            <th class="text-center">Required</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center" style={{width:"200px"}}>Update</th>
                                            <th class="text-center" style={{width:"200px"}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            filteredPosition.map((positionest)=>(
                                                <tr>
                                            <td class="me-xl-0" >{positionest.id}</td>
                                            <td>{positionest.title}</td>
                                            <td style={{whiteSpace: "pre"}}>{positionest.start_work}</td>
                                            <td>{positionest.end_work}</td>
                                            <td class="text-center pe-xl-2 me-xl-0" style={{width: '81.5px', height: '58px', margin: '0px'}}>{positionest.domainemployeer}</td>
                                            <td class="text-center pe-xl-2 me-xl-0" style={{width: '81.5px', height: '58px', margin: '0px'}}>{positionest.nick}</td>
                                            <td class="text-center">{positionest.requirements}</td>
                                            <td class="text-center">{positionest.status}</td>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Link class="btn btn-primary" style={{ marginTop: '21px', marginBottom: '21px', marginLeft: '15px', background: 'rgb(223,182,78)' }} to={`/Position/${positionest.id}`}>
    <span class="text-white-50 icon" style={{ paddingRight: '0px', marginRight: '11px' }}><i class="fas fa-exclamation-triangle"></i></span>Edit
  </Link>
  <Link class="btn btn-primary" style={{ marginTop: '21px', marginBottom: '21px', marginLeft: '15px', background: 'rgb(0,98,255)' }} to={`/Assign/${positionest.id}`}>
    <span class="text-white-50 icon" style={{ textalign:'center', marginRight: '11px' }}></span><i class="fas fa-exclamation-triangle"></i><br />Asassign<br />Employee<br />To<br />Position
  </Link>
</div>
<td class="text-center"><button class="btn btn-primary" onClick={()=>deletePosition(positionest.id)} style={{marginTop: '15px',marginBottom: '21px', marginLeft: '11px', background: rgb(223,87,78)}}><span class="text-white-50 icon" style={{marginRight: '5px' }}><i class="fas fa-trash" ></i></span>Delete</button></td>
                                        </tr> 
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Position</strong></td>
                                            <td><strong>Date start</strong></td>
                                            <td><strong>Date end</strong></td>
                                            <td><strong>Email domain</strong></td>
                                            <td><strong>Nickname</strong></td>
                                            <td><strong>Required</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td class="text-center"><strong>Update</strong></td>
                                            <td class="text-center"><strong>Delete</strong></td>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
    </div>
    
    );
                                    
}
