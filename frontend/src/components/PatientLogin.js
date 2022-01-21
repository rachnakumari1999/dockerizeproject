import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
import { login } from '../api/auth_patient';
import { Navigate } from 'react-router-dom';
import CSRFToken from './CSRFToken';

const PatientLogin = () =>{

    const [formData,setFormData] = useState({
        patient_id:'',
        secret_key:''
    });

    const [patientId,setPatientId] = useState(false)

    const handleChange = (event) =>{
        setFormData(formData =>({
            ...formData,
            [event.target.name]:event.target.value
        }));
    }

    const [all, setAll] = useState(false);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const form = {'patient_id':parseInt(formData.patient_id),'secret_key':formData.secret_key}
        const res = await login(form);
        if(!res.data.error){
            console.log(res.data[0])
            localStorage.setItem("patientData",res.data[0].id)
            setPatientId(localStorage.getItem("patientData"))
        }
        
    }

    const handleAll = () => {
        setAll(!all);
    }

    if(patientId){
        if (all) {
            return <Navigate to='/allprescription' />
        } else {
        return <Navigate to='/viewprescription'/>
        }
    }


    return(
        <div>
            <Header />

            <div className="container-fluid" style={{
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1611689102033-7f9e0a8eb851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}> 

                <div className="text-center p-4">
                    <h1>Patient Details</h1>
                </div>

                <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                    <div className="col-lg-6 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <CSRFToken/>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> 
                                                        <label htmlFor="form_p_id">Patient ID *</label> 
                                                        <input id="form_p_id" type="text" name="patient_id" className="form-control" placeholder="Please enter your unique patient id no. *" required="required" value={formData.patient_id} onChange={handleChange} data-error="Valid patient id is required." /> 
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> 
                                                        <label htmlFor="form_p_secretkey">Secret Key *</label> 
                                                        <input id="form_p_secretkey" type="password" name="secret_key" className="form-control" placeholder="Secret Key *" required="required" value={formData.secret_key} onChange={handleChange} data-error="Secret Key is required." /> 
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <center>
                                                    <div className="col-md-12">
                                                        <div className="form-group"> 
                                                        <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder", marginBottom: "10px"}}    onClick={handleAll}> {(!all) ? "Latest (tap to view all)" : "All (tap to view latest)"}</button>
                                                            <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}} >View Details</button>
                                                        </div>
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
            <Footer />
        </div>
    );
}

export default PatientLogin;

