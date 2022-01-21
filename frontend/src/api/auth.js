import Cookies from 'js-cookie';
import axios from 'axios';

export const login = async (formData) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify(formData)

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/doctors/login`, body, config);
        if (res.status === 200) {
            return res
        }
        
        
    } catch(err) {
        return err;
    }
};


export const logout = async () => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({
        'withCredentials': true
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/doctors/logout`,  body, config);

        if (res.data.success) {
            localStorage.removeItem('isAuthenticated')
            return true
        }
    } catch(err) {
        console.log(err)
    }
};

export const checkAuthenticated = async () => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };


    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctors/authenticated`, config);
        console.log(res.data)
        if (res.data.isauthenticated) {
            return true
        } else {
            return false
        }
        
    } catch(err) {
        return false
    }
};