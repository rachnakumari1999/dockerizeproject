import React from 'react';
import Header from './Header';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import BannerImg from '../images/Mask Group 4.jpg'
import drImage from '../images/drimage.jpg';
import patient from '../images/patient.jpg';
import './Home.css';



const Home = ({ isAuthenticated, setIsAuthenticated }) => {

    return (
        <div> 
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <div className='doctorHeading'>
            <section className="banner-section">
			<div className="container">
				<div className="row align-items-center" style={{ height: '100vh' }}>
					<div className="col-md-4">
						<h2>
							Your Health Matters...
						</h2>
						<p className="my-4" style={{ fontSize:'22px'}}>
                            We are here to ensure fast and accurate medical care for you. Your prescription are safely stored and they help the doctors to provide you get all kinds of health related services with accurate consultation.
						</p>
                        <Link className="btn btn-primary button-style" style={{ fontSize:'18px'}} to="/about">
							Learn More...
						</Link>
					</div>
					<div className="col-md-6 d-none d-md-block offset-1">
						<img className="img" src={BannerImg} alt="banner-img" width="100%"/>
					</div>
				</div>
			</div>
		    </section>
            <div className="ourDoctors" >
                <div>
                    <div className="ourDoctorsDetails" style={{ fontSize:'30px'}}>
                        <a href="/doctor_login"><Card  style={{borderRadius:'20px'}}>
                            <img style={{ height: "350px", borderRadius:'10px 10px 0 0'}} src={drImage} alt="" />
                            <div className="doctorsInfo" style={{ borderRadius:'0 0 10px 10px'}}>
                                <h5>Doctor</h5>
                            </div>
                        </Card></a>
                        <a href="/patientlogin"><Card  style={{borderRadius:'20px 20px 10px 10px'}}>
                            <img style={{ height: "350px", borderRadius:'10px 10px 0 0'}} src={patient} alt="" />

                            <div className="doctorsInfo" style={{ borderRadius:'0 0 10px 10px'}}>
                                <h5>Patient</h5>
                            </div>
                        </Card></a> 
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;