import React ,{useState,useEffect} from 'react';
import Header from './Header';
import "./App.css";
import Footer from './Footer';

import { prescriptiondetail,medicationdetail } from '../api/pres';




const AllPrescription = () =>{
    const [prescriptionData,setPrescriptionData] = useState(false)
    const [medicationData,setMedicationData] = useState(false)
    const [olderPrescriptionData, setOlderPrescriptionData] = useState(false)
    const [olderMedicationData, setOlderMedicationData] = useState(false)
    const [med, setMed] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const prescription = await prescriptiondetail(localStorage.getItem('patientData'))
                if(prescription.status===200){
                    const medication = await medicationdetail(prescription.data[prescription.data.length-1].id)
                    setOlderPrescriptionData(prescription.data)
                    setPrescriptionData(prescription.data[prescription.data.length-1])
                    setMedicationData(medication.data)
                  
                }
                
            } catch (err) {
                console.log(err)

            }
        };

        fetchData();
        
    }, []);

    const handleCurrentMed = async (id) => {
        const medication = await medicationdetail(id)
        setOlderMedicationData(medication.data)
        setMed(true)
    }

    const handleHide = () => {
        setOlderMedicationData(false)
        setMed(false)
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
            <h1>Your Prescriptions</h1>
            </div>
            
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                            <h4><b>Details ({(prescriptionData) ? prescriptionData.date : ""})</b></h4>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                Doctor ID : <b>{(prescriptionData) ? prescriptionData.doctor_id : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                                Doctor Name : <b>{(prescriptionData) ? prescriptionData.doctor_name : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Patient's ID : <b>{(prescriptionData) ? prescriptionData.patient_id : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Patient's Name : <b>{(prescriptionData) ? prescriptionData.patient_name : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Chief Complaints : <b>{(prescriptionData) ? prescriptionData.chief_complain : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Clinical Features : <b>{(prescriptionData) ? prescriptionData.doctor_id : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Examination : <b>{(prescriptionData) ? prescriptionData.examination : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Investigations : <b>{(prescriptionData) ? prescriptionData.investigation : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Advice/Referrals : <b>{(prescriptionData) ? prescriptionData.advice : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Notes : <b>{(prescriptionData) ? prescriptionData.comment : ""}</b>
                                            </div>
                                        </div><br /><br />
                                        
                                        <div className="row">
                                        <center>
                                            
                                        </center>
                                        </div>
                                        
                                    </div>

           


                                {(medicationData) ? medicationData.map(medication => {
                
                                    return (
                                        
                                        <div className="">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                <h4><b>Drugs</b></h4>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Medicine : <b>{medication.medication_item}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Strength : <b>{medication.strength}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Preparation : <b>{medication.preparation}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Route : <b>{medication.route}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Dosage : <b>{medication.dose}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Direction : <b>{medication.direction}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Frequency : <b>{medication.frequency}</b>
                                                </div>
                                                <div className="col-md-6">
                                                    Duration : <b>{medication.duration}</b>
                                                </div>
                                            </div><br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Total Quantity : <b>{medication.total_quantity}</b>
                                                </div>
                                            </div><br />
                                        </div>
                                    )
                                }) : ""}
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {(olderMedicationData) ? <center><button variant="outline-primary" style={{width:"30%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder", margin: "10px 0 10px 0"}} onClick={handleHide}>Tap to hide</button></center>: ""}

        {(olderMedicationData) ? olderMedicationData.map(medi => {
            
            return (
                
                <div style={{boxShadow: '3px 3px 3px 3px'}} className="col-lg-7 mx-auto">
                    <center>
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <h4><b>Drugs</b></h4>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            Medicine : <b>{medi.medication_item}</b>
                        </div>
                        <div className="col-md-6">
                            Strength : <b>{medi.strength}</b>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            Preparation : <b>{medi.preparation}</b>
                        </div>
                        <div className="col-md-6">
                            Route : <b>{medi.route}</b>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            Dosage : <b>{medi.dose}</b>
                        </div>
                        <div className="col-md-6">
                            Direction : <b>{medi.direction}</b>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            Frequency : <b>{medi.frequency}</b>
                        </div>
                        <div className="col-md-6">
                            Duration : <b>{medi.duration}</b>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            Total Quantity : <b>{medi.total_quantity}</b>
                        </div>
                    </div><br />
                    </center>
                </div>
            )
        }) : ""}
            {(!med) ? (olderPrescriptionData) ? olderPrescriptionData.map(pres => { return <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
            
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                            <h4><b>Details ({pres.date})</b></h4>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                Doctor ID : <b>{pres.doctor_id}</b>
                                            </div>
                                            <div className="col-md-6">
                                                Doctor Name : <b>{pres.doctor_name}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Patient's ID : <b>{pres.patient_id}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Patient's Name : <b>{pres.patient_name}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Chief Complaints : <b>{pres.chief_complain}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Clinical Features : <b>{pres.doctor_id}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Examination : <b>{pres.examination}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Investigations : <b>{pres.investigation}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Advice/Referrals : <b>{pres.advice}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Notes : <b>{pres.comment}</b>
                                            </div>
                                        </div><br /><br />
                                        <button style={{color: "white", padding: "5px", borderRadius: "10px"}}onClick={() => handleCurrentMed(pres.id)}>View Medication report</button>
                                        <div className="row">
                                        <center>
                                            
                                        </center>
                                        </div>
                                        
                                    </div>                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>}) : "" : ""}
            
            
            <div className="row" style={{height:"25px"}}>
             </div>       


            </div>
            <Footer/>
        </div>

    )
}

export default AllPrescription;

