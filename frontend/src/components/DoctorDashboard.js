import React, { useState, useEffect } from 'react';
import { doctordetail } from '../api/doc';
import Header from './Header';
import Footer from './Footer';
import { logout } from '../api/auth';
import { getappointment } from '../api/appoint';

const DoctorDashboard = ({ isAuthenticated, setIsAuthenticated }) => {

    const [doctorData, setDoctorData] = useState('');
    const [appointment, setAppointment] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctordetail();
                if (res.status === 200) {
                    setDoctorData(res.data[0])
                    
                }
                const appoint = await getappointment();
                if (appoint.data.error) {
                    setAppointment(false)
                } else {
                    setAppointment(true)

                }
                

            } catch (err) {
            }
        };
        
        fetchData();
    }, []);

 
    
   

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <div class="container-fluid" style={{
            width: "100%",
            height: "100%",

            backgroundImage: "url('https://images.unsplash.com/photo-1611690828081-878ab4e8416d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         }}> 


            <div className="text-center p-4">
            <h1>Welcome Dr. {doctorData.firstname}</h1>
            <br />
            {(appointment) ? <h4 style={{color:'#eb1e75'}}><a href="/appointment" >You have some appointments (click to view)</a></h4> : <h4 style={{color:'#eb1e75'}}>No Appoinments for Today :)</h4>}
            </div>

            <div className="container" style={{ display:"flex", justifyContent:"center",borderRadius:"10px 10px 10px 10px"}}>
            <div className="card" style={{width: "40vw",height:"100%", justifyContent:'center', borderRadius:"10px"}}>

                <div className="card-body"style={{padding:'20px',borderRadius:"10px 0 0 10px", justifyContent:'center'}}>
                
                <h5>Doctor ID : <b>{doctorData.id}</b></h5><br />
                <h5>Doctor Name : <b>{doctorData.firstname} {doctorData.lastname}</b></h5><br />
                <h5>Doctor Qualification : <b>{doctorData.qualification}</b></h5><br />
                <h5>Doctor Mobile No : <b>{doctorData.phone_no}</b></h5><br />
                <form method="get" action="doctor_login">
                <button variant="outline-primary" style={{width:"30%", height:"5vh", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}} onClick={logout}>Logout</button>
                </form>

                </div>
            </div>
            
            </div>

            <div className="container" style={{ display:"flex", justifyContent:"center"}}>

            <form id="contact-form" method="get" action="addprescription">
                <div className="form-group"><button variant="outline-primary" style={{width:"20vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"10px", color:"white", fontWeight:"bolder"}}>Add Prescription</button></div>

                </form>
            </div>
            <div className="container" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="addpatient">
                <div className="form-group"><button variant="outline-primary" style={{width:"20vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"10px", color:"white", fontWeight:"bolder"}}>Add Patient</button></div>

                </form>
            </div>

        </div>
        <Footer/>
    </div>
    

    )
}

export default DoctorDashboard;