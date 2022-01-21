import axios from "axios";
import Cookies from "js-cookie";

export const addPatient = async (formData) =>{
    const config={
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body=JSON.stringify(formData)

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/patient/addpatient/`, body, config);
        return res
    }catch(err){
        return err
    }
}