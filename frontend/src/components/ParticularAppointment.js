import React ,{useState} from 'react';
import Header from './Header';
import "./App.css";
import Footer from './Footer';
import { getappointment } from '../api/appoint';

const ViewAppointment = () =>{
    const [appointment, setAppointment] = useState(false)
    const [mulitple, setMultiple] = useState(true)
    const [singleAppoint, setSingleAppoint] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const appoint = await getappointment();
                setAppointment(appoint.data)

                  
                }
                catch (err) {
                    console.log(err)
    
                }
            } 

        fetchData();
        
    }, []);

    const handleAppointment = (appoint) => {
        setSingleAppoint(appoint)
        setMultiple(false);

    }

    const handleAll = () => {
        setMultiple(true)
    }

  
    return (
        
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://img.freepik.com/free-photo/stethoscope-with-business-card_23-2147652316.jpg?size=626&ext=jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Your Appointment</h1>
            </div>
            
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                    <div className="controls">
                                        <div className="row">
                                    
                                            <div className="col-md-12 text-center">
                                            <h4><b>Appointments</b></h4>
                                            </div>
                                        </div><br />
                                        {(!multiple) ? <div>
                                        {(appointment) ?  appointment.map(appoint => <div className="row">
                                            <center>
                                            <div>
                                                <p style={{ boxShadow: "1px 1px 1px"}} onClick={() => handleAppointment(appoint)}>{appoint.firstname} {appoint.lastname} - {appoint.time} {(appoint.existing) ? "Existing Patient" : ""}</p>
                                            </div>
                                            </center>
                                            
                                        </div>) : ""}
                                            </div> : <div>
                                            <div className="">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                <h4><b>Appointment Details</b></h4>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    First Name : <b>{appint.firstname}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Last Name : <b>{appoint.lastname}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Date : <b>{appoint.date}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Time : <b>{appoint.time}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Phone : <b>{appoint.phone}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Issue : <b>{appoint.issue}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    To View all : <b><button onClick={handleAll}>Click Here</button></b>
                                                </div>
                                            </div><br />
                                        </div>

                                                </div>}
                                        
                
                                        
                                    </div>
                                
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

export default ViewAppointment;

