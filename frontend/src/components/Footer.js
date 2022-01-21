import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import "./App.css";

const Footer = () => {

    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                       <b><p>Services</p></b>
                    </div>
                    <div>
                        <small>Emergency</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <b><p>Connect with us</p></b>
                <div>
                    <div className="brandIcon">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faGooglePlusG} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <small>Call Now</small>
                    <p className="callNow">+911234567890</p>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <small>Copyright 2022 DocEasy.com</small>
            </div>
        </div>
    )
}

export default Footer;





