import React,{useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
import { addPatient } from '../api/patientdata';
import CSRFToken from './CSRFToken';
import {doctordetail} from '../api/doc'

const AddPatient = () => {
    
    const [formData,setFormData] = useState({
        firstname:'',
        lastname:'',
        dob:'',
        email:'',
        gender:'',
        height:'',
        weight:'',
        phone:'',
        address:'',
        current_doctor:'',
        secretkey:''

    });


    const [status, setStatus] = useState(400);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctordetail();
                setFormData(formData =>({
                    ...formData,
                    current_doctor: res.data[0].id
                }));
                
            } catch (err) {
                console.log(err)
            }
        };
    
            fetchData();

        
    }, []);


    const handleChange = (event) => {
        setFormData(formData =>({
            ...formData,
            [event.target.name]: event.target.value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await addPatient(formData);
        console.log(res.status)
        console.log(formData)
        if (res.status === 201) {
            alert(res.data.firstname + res.data.lastname + "'s Patient ID is: " + res.data.id)
            setStatus(201)
        }
        else {
            console.log('bye')
        }
    };

    if (status === 201) {
        return <Navigate to='/doctor_dashboard' />
    }
    
    return (
    <div>
        <Header />

        <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1611690828081-878ab4e8416d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="text-center p-5">
                <h1>Add Patient</h1>
            </div>
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                <CSRFToken />
                                    <div className="controls">

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label htmlFor="form_p_fname">Firstname *</label> 
                                                    <input id="form_p_fname" type="text" name="firstname" className="form-control" placeholder="Please enter your Firstname *" required="required" value= {formData.firstname} onChange={handleChange} data-error="Firstname is required." /> 
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label htmlFor="form_p_lname">Lastname *</label> 
                                                    <input id="form_p_lname" type="text" name="lastname" className="form-control" placeholder="Lastname*" required="required" value= {formData.lastname} onChange={handleChange} data-error="Lastname is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label htmlFor="form_dob">Date Of Birth *</label> 
                                                    <input id="form_dob" type="date" name="dob" className="form-control" placeholder="Please enter your Date of birth *" required="required" value={formData.dob} onChange={handleChange} data-error="Date of birth is required." /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_email">Email *</label> 
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your Email *" required="required" value={formData.email} onChange={handleChange} data-error="Email is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                     <label htmlFor="form_gender">Gender *</label> 
                                                    <select id="form_gender" name="gender" className="form-control dropdown-toggle" value= {formData.gender} onChange={handleChange} placeholder='Choose Gender'>
                                                        <option >Choose Gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label htmlFor="form_p_mob_no">Mobile No. *</label>
                                                    <input id="form_p_mob_no" type="tel" name="phone" className="form-control" placeholder="Please enter your mobile no. *" required="required" value={formData.phone} onChange={handleChange} data-error="Valid mobile number is required." />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group "> 
                                                    <label htmlFor="form_height">Height (in cm) *</label> 
                                                    <input id="form_p_height" type="number" name="height" className="form-control" placeholder="Please enter your  height*" required="required" value={formData.height} onChange={handleChange} data-error="Patient height is required." /> 
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                <label htmlFor="form_weight">Weight (in kg) *</label> 
                                                    <input id="form_p_weight" type="number" name="weight" className="form-control" placeholder="Please enter your  weight*" required="required" value={formData.weight} onChange={handleChange} data-error="Patient weight is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                <label htmlFor="form_p_secretkey">Secret Key*</label> 
                                                    <input id="form_p_secretkey" type="password" name="secretkey" className="form-control" placeholder="enter your secret key*" required="required" value={formData.secretkey} onChange={handleChange} data-error="Patient weight is required." /> 
                                                </div>
                                            </div>
                                            </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="form_p_address">Address *</label>
                                                    <textarea id="form_p_address" name="address" className="form-control" placeholder="Write your address here." rows="3" required="required" value={formData.address} onChange={handleChange} data-error="Address is required."></textarea> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <center>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <button variant="outline-primary" style={{ width: "100%", height: "40px", backgroundColor: "#2a8fc7", border: "none", borderRadius: "20px", color: "white", fontWeight: "bolder" }}>Add Patient</button>
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
            
            <div className="row" style={{ height: "25px" }}>
            </div>
        </div>
        <Footer />
    </div>
)
}
export default AddPatient;
