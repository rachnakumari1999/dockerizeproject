import React from 'react';
import './Home.css';


const Header = () => {


    return (
        <div>
            <div className="topnav">
                <a className="active" href="/">DocEasy</a>
                <div className="topnav-right">
                    <a href="/about">About Us</a>
                    <a href="/addappointment">Make Appoinment</a><a href="/patientlogin">Patient Portal</a> <a href="/doctor_login">Doctor Portal</a>
                </div>
            </div>
        </div>
    )
}

export default Header;