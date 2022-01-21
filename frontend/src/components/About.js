import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {CCard,CCardBody,CCardTitle,CRow,CCol} from '@coreui/react';

import './Home.css';

const About = () => {

    return (
        <div>
            <Header />
            <div className="about_us">
                <div className="row align-items-center" style={{ height: '30vh', width: '100%', margin: 'auto'}} >
                        <div className="col-md-10">
                            <p className="my-7" style={{ fontSize:'22px', paddingLeft:'25%', paddingRight:'15%', textAlign:'center'}}>
                            The DocEasy website features a clean, straightforward information architecture to simplify the process of Health Care in hospitals to help the patients, doctor... 						
                            </p>
                        </div>
                </div>
            
            <CRow >
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody style={{background:'transparent'}}>
                        <CCardTitle style={{color:'#eb1e75'}}>Shivangi Pandey</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Ratna Priya Jha</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Rachna Kumari</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Shallum Israel</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Sahil Verma</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Mayank Garg</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
               <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Ritik Jain</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
                <CCol sm={3} style={{padding:'2%', paddingLeft:'2%', paddingRight:'2%'}}>
                    <CCard  className="CC" style={{ borderRadius:'20px'}}>
                    <CCardBody>
                        <CCardTitle style={{color:'#eb1e75'}}>Santhosh Puvaneswaran</CCardTitle>
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            </div>
            <Footer />
        </div>
    )
}

export default About;