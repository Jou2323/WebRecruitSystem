import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js

export default function ViewVacancy() {

    const { token, logout } = useAuth();
    const location = useLocation();
    
    const [vacancy,setVacancy]=useState({
        title:"" ,
        description:"",
        location:"",
        cost:"",
        year_exp:"",
        work_table:"",
        requirements: "",
        responsibilities: "",
        status: ""

    })

    const {id} = useParams()

    useEffect(() => {
        if (token) {
        loadVacancy();  
    }}, [location, token]);

    const loadVacancy= async ()=>{
        try{
        const result= await axios.get(`http://localhost:8080/vacancies/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }});
        setVacancy(result.data);
    }catch (error) {
        console.error('Error loading vacancy:', error);
        if (error.response && error.response.status === 401) {
          // Якщо токен протух або не дійсний, виконайте вихід
          logout();
        }
      }
    };

    return(
        <div class="container">
        <div class="row">
        <div class="col-xxl-10">
            <div class="card shadow mb-3">
                <div class="card-header py-3 "><span style={{height: "46px" }} >ID:  </span><span style={{height: "46px"}}>{vacancy.id}</span>
                    <h3 class="col-md-12">Title vacancy: {vacancy.title}</h3>
                    <h6 class="col-md-12">Year Expiriens: {vacancy.year_exp}</h6>
                    <div class="col-md-12">
                        <div class="d-inline-block" style={{marginRight: "10px"}}><span>Salary: $ {vacancy.cost} hd </span></div>
                    <div class="d-inline-block ml-4"><span>Location: {vacancy.location}</span></div>
                    </div>
                    <div class="col-md-12">
                    <div class="d-inline-block" style={{marginRight: "10px"}}><span>Work-time: {vacancy.work_table}</span></div>
                    <div class="d-inline-block ml-4"><span>Status: {vacancy.status}</span></div></div>
                </div>
                <div class="card-body">
                    <span style={{ display: 'flex', justifyContent: 'flex-start'}}>Desccription: {vacancy.description}<br/><br/></span>
                    <span style={{whiteSpace: "pre"}}>Requirements:<br/> {vacancy.requirements}<br/><br/></span>
                    <span style={{whiteSpace: "pre"}}>Responsibilities:<br/> {vacancy.responsibilities}</span>
              </div>
        </div>
    </div>
    </div>
    </div>
    );
}