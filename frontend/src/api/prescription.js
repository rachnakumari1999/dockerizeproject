import axios from 'axios';

export const doctordetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eprescription/list/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
}; 