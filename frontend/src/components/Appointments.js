import React,{useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
import CSRFToken from './CSRFToken';
import { doctorlist} from '../api/doc'
import { appointdate, addappointment } from '../api/appoint';

const Appointments = ({ isAuthenticated }) => {
    
    const [formData,setFormData] = useState({
        firstname:'',
        lastname:'',
        date:'2022-02-02',
        time:'',
        phone:'',
        issue:'',
        doctor:'',
        existing:false
    });

    const [doctorList, setDoctorList] = useState([]);
    const [timeList, setTimeList] = useState([]);


    const [status, setStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctorlist();
                setDoctorList(res.data);
                
            } catch (err) {
            }
        };
         fetchData();

        
    }, []);

    const handleDate = async (event) => {
        setFormData(formData =>({
            ...formData,
            [event.target.name]: event.target.value
        }));
        const timeavail = ['10AM - 11AM', '11AM - 12PM', '12PM - 1PM', '2PM - 3PM', '3PM - 4PM', '4PM - 5PM']
        const res = await appointdate(event.target.value, formData.doctor);
        const databasetime = res.data
        let times = timeavail;
        for (let i = 0; i < databasetime.length; i++) {
            let index = times.indexOf(databasetime[i].time)
            if (index !== -1) {
                times.splice(index, 1)
            }
        }

        setTimeList(times)


    }

    const handleExisting = (event) => {
        setFormData(formData => ({
            ...formData,
            [event.target.name]: !formData.existing
        }))
    }

    const handleChange = (event) => {
        setFormData(formData =>({
            ...formData,
            [event.target.name]: event.target.value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await addappointment(formData);
     
        if (res.status === 201) {
            alert("Your appointed is made successfully!")
            setStatus(true)
        }
    
    };

    if (status) {
        return <Navigate to='/' />
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
                <h1>New Appointment</h1>
            </div>
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                <CSRFToken />
                                    <div className="controls">

                                    <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                     <label htmlFor="form_doctor">Doctor *</label> 
                                                    <select id="form_doctor" name="doctor" className="form-control dropdown-toggle" value= {formData.doctor} onChange={handleChange} placeholder='Choose Doctor'>
                                                    <option >Choose Doctor</option>
                                                    {(doctorList.length !== 0) ? doctorList.map(doctor => <option value={doctor.id}>{doctor.firstname} {doctor.lastname} - {doctor.qualification} (Specializaed in {doctor.specialization})</option>) : ''}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label htmlFor="form_date">Date *</label> 
                                                    <input id="form_date" type="date" name="date" className="form-control" placeholder="On What date *" required="required" value={formData.date} onChange={handleDate} data-error="Date is required." /> 
                                                </div>
                                            </div>
                                        </div>

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
                                                    <label htmlFor="form_time">Time *</label> 
                                                    <select name="time" id="form_time" className="form-control dropdown-toggle" value={formData.time} onChange={handleChange}>
                                                    <option >Choose Time</option>
                                                    {(timeList) ? timeList.map(timevalue => <option value={timevalue}>{timevalue}</option>) : ''}
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
                                                    <label htmlFor="form__p_issue">Issue *</label> 
                                                    <textarea id="form_p_issue" name="issue" className="form-control" placeholder="Issue *" rows="2" required="required" data-error="Issue is required." value={formData.examination} onChange={handleChange}></textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                <label htmlFor="form_exist">Check if you are existing Patient *</label> 
                                                <input type="checkbox" id="form_exist" name="existing" value={formData.existing} onChange={handleExisting} /> </div>
                                            </div>
                                        </div>

                                       
                                        <div className="row">
                                            <center>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <button variant="outline-primary" style={{ width: "100%", height: "40px", backgroundColor: "#2a8fc7", border: "none", borderRadius: "20px", color: "white", fontWeight: "bolder" }}>Make Appoinment</button>
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
export default Appointments;
