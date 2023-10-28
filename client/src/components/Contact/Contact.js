import React from 'react'
import './Contact.css'
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from 'react-reveal/Fade';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const API = "https://portfolio-backend-pr.onrender.com/sendmail";
    // const API = "http://localhost:8080/sendmail";

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [jobtypes,setJobtypes] = useState("Full-time");
    const [message,setMessage] = useState();

    const sendmailInfo = () =>{
        // e.preventDefault();
        console.log(email)
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                jobtypes,
                message
            }),
        })
        .then((res) => res.json())
        .then((result)=>{
            console.log(result)
            if(result.error){
                toast.error(result.error,{
                    position: toast.POSITION.TOP_RIGHT
                })   
            }
            else{
                console.log("email sent successfully")

                toast.success("Your E-mail has been sent",{
                    position: toast.POSITION.TOP_RIGHT
                })
                setName("")
                setEmail("")
                setJobtypes("")
                setMessage("")
            }

          
        })
        .catch((err) => {
            console.log(err)
        });
    };

  return (
    <div className='container contact-section' id='contact'>
      <div className='row'>
        <Fade bottom>
        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 '>
            <div className='contact-form-image'>
                <img src='https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='Contact Form Image'
                />
            </div>  

        </div>
        </Fade>

        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7 form'>
            <Fade right>
            <div className='contact-form-design'>
                <div className='text-center'>
                    <h5>Contact Me</h5>
                </div>
                
                <form >
                    <div className='contact-form'>
                        <label className='form-label'>Name</label>
                        <input type='text'
                        className='form-control' 
                        value = {name}
                        onChange = {(e) =>setName(e.target.value)}
                        />
                    </div>

                    <div className='contact-form'>
                        <label className='form-label'>E-Mail</label>
                        <input type='text' 
                        className='form-control'
                        value = {email}
                        onChange = { (e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='contact-form'>
                        <label className='form-label'>Job Type</label>
                        <select className='custom-select-tag'
                        value={jobtypes}
                        onChange = {(e) => setJobtypes(e.target.value)}
                        >
                            <option>Full-time</option>
                            <option>Working Student</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                        </select>
                        
                    </div>

                    <div className='contact-form'>
                        <label className='form-label'>Message</label>
                        <textarea rows="4" 
                        type="text" 
                        className='form-control'
                        value = {message}
                        onChange = {(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className='button-submit'>
                        <p onClick={sendmailInfo}>Submit <RiSendPlaneFill size={20}/></p>
                    </div>
                </form>
            </div>
            </Fade>
        </div>
       
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  )
}

export default Contact
