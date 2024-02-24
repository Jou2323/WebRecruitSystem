import React, { useRef  } from "react";

import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";
import { useAuth } from '../AuthContext'; // Шлях до AuthContext.js
import { useLocation } from "react-router-dom";
const SendMessage = () => {
  const form = useRef();
  const { token, logout } = useAuth();
  const location = useLocation();
  const sendEmail = (e) => {
    try{
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7phjpcr",
        "template_u5n1ja4",
        form.current,
        "QmUW0tmjpBnib7v2i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }, {
          headers: {
              'Authorization': `Bearer ${token}`
            }}
      );
    }catch (error) {
      console.error('Error loading message:', error);
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
        <h2 className="text-center m-4">Send Message</h2>
      
    <form ref={form} onSubmit={sendEmail}>
    <label class="form-label">Name</label>
    <input type="text" name="user_name" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}}/>
    <label class="form-label" >Email</label>
    <input type="email" name="user_email" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}}/>
    <label>Message</label>
    <textarea name="message" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "111px"}}/> 
    <input type="submit" className="btn btn-outline-primary" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} value="Send" />
    <Link className="btn btn-outline-danger mx-2" style={{paddingLeft: '7px',marginTop: '20px', marginLeft: '38px', width: '427px', height: '45px'}} to="/Report">Cancel</Link>
    
  </form>
  </div>
  </div>
  </div>
  
  );
};

export default SendMessage;

