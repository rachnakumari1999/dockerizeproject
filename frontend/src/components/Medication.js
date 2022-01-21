import React from 'react';


const  Medication = ({ addMedication, setMedications, setAddMedication, medications}) => {

	const handleChange = (event) => {
		setAddMedication(addMedication => ({
			...addMedication,
			[event.target.name]: event.target.value
		}))
	}

	const handleSubmitPrescription = (event) => {
		event.preventDefault()
		console.log('medication.js')
		setMedications(medications => [...medications, addMedication])

		setAddMedication({
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
	}
    const handleDelete = (med) => {
        setMedications(medications.filter((e)=>{
			return e!==med;
		}))
	}

	return (
		<div>
			<form onSubmit={handleSubmitPrescription}>
				<div className="row">
					<div className="col-md-6">
					<input type='text' name='medication_item' placeholder='Medication Name' value={addMedication.medication_item} onChange={handleChange}  required="required"  style={{width:"100%"}} />
					</div>
					<div className="col-md-6">
					<input type='text' name='strength' placeholder='Strength' value={addMedication.strength} onChange={handleChange} style={{width:"100%"}}  required="required" />
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<select type='' placeholder='Preparation' name='preparation' value={addMedication.preparation} onChange={handleChange} required="required"   style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Preparation</option>
					<option value="Tablets" >Tablets</option>
					<option value="Capsule" >Capsule</option>
					<option value="Injection" >Injection</option>
					<option value="Syrup" >Syrup</option>
					<option value="Drops" >Drops</option>
					</select>
					</div>
					<div className="col-md-6">
					<select type='' placeholder='Route' name='route' value={addMedication.route} onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Route</option>
					<option value="Topical" >Topical</option>
					<option value="Oral" >Oral</option> 
					<option value="Rectal" >Rectal</option>
					<option value="Vaginal" >Vaginal</option>
					<option value="Inhalation" >Inhalation</option>
					<option value="Local" >Local</option>
					<option value="Chew" >Chew</option>
					<option value="Intradermal" >Intradermal</option>
					<option value="Subcutanous" >Subcutanous</option>
					<option value="Intramuscular" >Intramuscular</option>
					<option value="Intraveous" >Intravenous</option>
					<option value="Nasal" >Nasal</option>
					<option value="Ear Drops" >Ear Drops</option>
					<option value="Eye Drops" >Eye Drops</option>
					</select>
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<input type='number' name='dose' placeholder='Dosage' value={addMedication.dose}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
					<div className="col-md-6">
					<select type='' placeholder='Direction' name='direction' value={addMedication.direction} onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Direction</option>
					<option value="Before meals" >Before meals</option>
					<option value="After meals" >After meals</option>
					</select>
				</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<select type='' placeholder='Frequency' name='frequency' value={addMedication.frequency} onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Frequency</option>
					<option value="If Required">If Required</option>
					<option value="Immediately">Immediately</option>
					<option value="Once a day">Once a day</option>
					<option value="Twice daily">Twice daily</option>
					<option value="Trice daily">Thrice daily</option>
					<option value="Four times a day">Four times a day</option>
					<option value="Every hour">Every hour</option>
					<option value="Every night at bedtime">Every night at bedtime</option>
					<option value="Every day">Every day</option>
					<option value="Every other day">Every other day</option>
					<option value="Every four hours">Every four hours</option>
					<option value="Once a week">Once a week</option>
					<option value="Three times a week">Three times a week</option>
					</select>
					</div>
					<div className="col-md-6">
					<input type='text' name='duration' placeholder='Duration' value={addMedication.duration}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<input type='text' name='total_quantity' placeholder='Total Quantity' value={addMedication.total_quantity}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
					<div className="col-md-6">
					<button className="btn-primary"  style={{width:"100%", border:"3px solid blue", borderRadius:"5px"}}>Add</button>
					</div>
                </div><br />
				
			</form>
			<div>
				{(medications.length !== 0) ? medications.map((med) => {
				return <div key={med.medication_item} style={{border:"1px solid black"}}>
					<div className="row">
					<div className="col-md-6">
					<p>Medicine Name :  {med.medication_item}</p>
					</div>
					<div className="col-md-6">
					<p>Strength :  {med.strength}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Preparation :  {med.preparation}</p>
					</div>
					<div className="col-md-6">
					<p>Route :  {med.route}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Dosage :  {med.dose}</p>
					</div>
					<div className="col-md-6">
					<p>Direction :  {med.direction}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Frequency :  {med.frequency}</p>
					</div>
					<div className="col-md-6">
					<p>Duration :  {med.duration}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Total Quantity :  {med.total_quantity}</p>
					</div>
					<div className="col-md-6">
					<button className="btn-danger" type="submit" onClick={() => handleDelete(med)} style={{border:"none", borderRadius:"5px"}}>Remove</button>
					</div><br />			
            		</div>                    
                </div>
				}) : ""}
			</div>
		</div>
	)
}


export default Medication
