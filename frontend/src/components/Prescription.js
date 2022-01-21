import Header from './Header'
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Medication from './Medication';
import { doctordetail } from '../api/doc';
import { patientdata } from '../api/pat';
import { createMedication, createPrescription } from '../api/pres';
import CSRFToken from './CSRFToken';
import Footer from './Footer'



const Prescription = () => {

    const [doctorData, setDoctorData] = useState(false);
    const [patientData, setPatientData] = useState(false);
    const [addPrescription, setAddPrescription] = useState({
        patient_id: '',
        doctor_id: '',
        doctor_name: '',
        patient_name: '',
        chief_complain: '',
        diagnosis: '',
        examination: '',
        investigation: '',
        advice: '',
        comment: '',
    })

    const [addMedication, setAddMedication] = useState({
        prescrition_id: '',
        medication_item: '',
        strength: '',
        preparation: '',
        route: '',
        dose: '',
        direction: '',
        frequency: '',
        duration: '',
        total_quantity: '',
    })

    const [medications, setMedications] = useState([])

    const [navigate, setNavigate] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctordetail(); 
                setDoctorData(res.data[0]) 
        
                
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
        fetchPatient();
        
    }, []);
    


    const fetchPatient = async () => {
        const res = await patientdata();
        setPatientData(res.data)   
      
    }

    const handleChange = (event) => {
		setAddPrescription(addPrescription => ({
			...addPrescription,
			[event.target.name]: event.target.value
		}))
	}

    const sendMedications = async (med) => {
        console.log(med)
        const response = await createMedication(med);
        console.log(response)
    }
   
    const handleSubmit =  async (event) => {
        event.preventDefault();
        console.log('prevention.js')

        const patient_name = patientData.map(data => {
            if (parseInt(data.id) === parseInt(addPrescription.patient_id)) {
                return data.firstname + ' ' + data.lastname
            } else {
                return undefined
            }
        })
        let patient_name2;
        for(let i=0;i<patient_name.length;i++)
        {
             if(patient_name[i] !== undefined)
             {
                 patient_name2=patient_name[i];
             }
        }
      
         setAddPrescription(addPrescription => ({
			...addPrescription,
            doctor_id: doctorData.id,
            doctor_name: doctorData.firstname + ' ' + doctorData.lastname ,
            patient_name: patient_name2
		}))

        let form = addPrescription
        console.log(patient_name)
        form.patient_name = patient_name2
        form.doctor_id = doctorData.id
        form.doctor_name = doctorData.firstname + ' ' + doctorData.lastname 
        console.log(form)
        const res = await createPrescription(form);
        if (res.status === 201) {
            console.log(res)
            console.log(medications)
            medications.forEach(medication => {
                medication.prescription_id = res.data.id
                sendMedications(medication);
            })
            alert("Prescription is created successfully")
            setNavigate(true)
        } else {
            console.log(res)
        }
        
    }

    if (navigate) {
        return <Navigate to='/doctor_dashboard' />
    }
           
    return (
        <div>
            <Header/>
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://cdn.pixabay.com/photo/2018/06/06/09/50/stethoscope-3457519_960_720.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4"   >
            <h1>Generate Prescription</h1>
            </div>
            
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <CSRFToken />
                                    <button className="btn-primary mt-4" htmlFor="contact-form" style={{width:"100%",height:"40px", border:"3px solid black", borderRadius:"10px"}} >Submit Prescription</button>

                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_id">Doctor ID : <b>{(doctorData) ? doctorData.id : ""}</b></label></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_name">Doctor Name : <b>{(doctorData) ? doctorData.firstname + ' ' + doctorData.lastname : ""}</b></label></div>
                                            </div>
                                        </div>
                                            <div className="col-md-6">
                                            <label htmlFor="form_p_name">Patient Name :</label>
                                                <select name="patient_id" id="patientname" value={addPrescription.patient_id} onChange={handleChange}>
                                                    <option >Choose Patient</option>
                                                    {(patientData) ? patientData.map(patient => <option value={patient.id}>{patient.firstname} {patient.lastname}</option>) : ''}
                                                </select>
       
                                            </div>
                                       
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cc">Chief Complaints *</label> <textarea id="form_p_cc" name="chief_complain" className="form-control" placeholder="Patient's chief complaints *" rows="2" required="required" data-error="Patient's chief complaints is required." value={addPrescription.chief_complain} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cf">Diagnosis *</label> <textarea id="form_p_cf" name="diagnosis" className="form-control" placeholder="Patient's Diagnosis *" rows="2" required="required" data-error="Patient's Diagnosis features is required." value={addPrescription.diagnosis} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_examination">Examination *</label> <textarea id="form_p_examination" name="examination" className="form-control" placeholder="Patient's examination *" rows="2" required="required" data-error="Patient's examination is required." value={addPrescription.examination} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_investigation">Investigations *</label> <textarea id="form_p_investigation" name="investigation" className="form-control" placeholder="Patient's investigations *" rows="2" required="required" data-error="Patient's investigations is required." value={addPrescription.investigation} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_advice">Advice/Referrals *</label> <textarea id="form_p_advice" name="advice" className="form-control" placeholder="Advice for patient *" rows="2" required="required" data-error="Advice for patient is required." value={addPrescription.advice} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_note">Notes *</label> <textarea id="form_p_note" name="comment" className="form-control" placeholder="Note for patient *" rows="2" required="required" data-error="Note for patient is required." value={addPrescription.comment} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h5><b>Add Drug</b></h5>
                                    </div>
                                </div>

                                </form>
                                <Medication addMedication={addMedication} medications={medications} setMedications={setMedications} setAddMedication={setAddMedication} />


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

export default Prescription
