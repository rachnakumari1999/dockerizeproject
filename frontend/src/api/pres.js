import axios from 'axios';
import Cookies from 'js-cookie';

export const prescriptiondetail = async (data) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    
    const body = JSON.stringify({id: data})
    console.log(body)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/eprescription/prescriptiondata/`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};



export const medicationdetail = async (data) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({prescription_id: data})


    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/eprescription/medicationdata/`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};

export const createPrescription = async (prescriptionData) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify(prescriptionData)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/eprescription/prescriptioncreate/`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};



export const createMedication = async (medicationData) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify(medicationData)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/eprescription/medicationcreate/`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};