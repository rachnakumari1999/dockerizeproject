import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import {  login } from '../api/auth';
import CSRFToken from './CSRFToken';

const DoctorLogin = ({ isAuthenticated, setIsAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(false)

    const handleChange = (event) => {
        setFormData(formData => ({
            ...formData, 
            [event.target.name]: event.target.value
        }));
        setError(false);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await login(formData);
        if (res.data.code === 200) {
            console.log('success')
            localStorage.setItem('isAuthenticated', true)
            setIsAuthenticated(true)
        } else {    
            console.log('fail')
            setError(true)
        }
    }
    
    if (localStorage.getItem('isAuthenticated')) {
        return <Navigate to='/doctor_dashboard' />
    } 

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1611689102033-7f9e0a8eb851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
      }}> 

            <div className="text-center p-4">
            <h1>Doctor Login</h1>
            </div>
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-6 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                        <p style={{ 'color': 'red', 'textAlign': 'center'}}>{(error) ? "Invalid Credentials!!!" : ""}</p>
                            <div className="container">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <CSRFToken />
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_d_email">Email ID *</label> <input id="form_d_email" type="email" name="email" className="form-control" placeholder="Email ID *" required="required" data-error="Email ID is required." value={formData.email} onChange={handleChange}/> </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_d_pass">Password *</label> <input id="form_d_pass" type="password" name="password" className="form-control" placeholder="Password *" required="required" data-error="Password is required." value={formData.password} onChange={handleChange}/> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <center>
                                            <div className="col-md-12">
                                                <div className="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Login</button></div>
                                            </div>
                                        </center>
                                        </div>
                                        
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row" style={{height:"25px"}}>

        </div>
        </div>
        <Footer/>
    </div>
    )
}

export default DoctorLogin
