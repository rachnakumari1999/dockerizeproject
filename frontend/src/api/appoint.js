import axios from "axios";
import Cookies from "js-cookie";

export const appointdate = async (datevalue, doctorvalue) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({date: datevalue, doctor: doctorvalue})
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/appointments/date`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};

export const addappointment = async (formData) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify(formData)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/appointments/create/`, body, config);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};

export const getappointment = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/appointments/list/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};