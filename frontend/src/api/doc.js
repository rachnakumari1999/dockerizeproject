import axios from 'axios';

export const doctordetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctors/list/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};

export const doctorlist = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctors/all/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};