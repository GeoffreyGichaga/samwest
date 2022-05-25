import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styling/Footer.css'
import logistics from '../assets/logistics.png'
import location from '../assets/location.png'
import email from '../assets/email.png'
import telephone from '../assets/telephone.png'



const Footer = () => {
  return (
    <Container fluid className='bg-black mt-4'>
        <Row >

            <Col className='mt-5'>
            <Row className='d-flex justify-content-center'>
                <img className='w-25' src={logistics} alt='Logo'/>
            </Row>
            <h4 className='logo-name text-center'>SamWest Distributors</h4>
            </Col>


            <Col className='mt-5'>
            <h4 className='contacts-info'>Useful Links</h4>
            <ul>
                <li className='contacts-info'>Home</li>
                <li className='contacts-info'>Shop</li>
                <li className='contacts-info'>Login/Register</li>

            </ul>
            
            </Col>

            <Col className='mt-5'>
                <h4 className='contacts-info'>Customer Service</h4>
                <p className='contacts-info'>Our customer Service team is available to help you </p>
                <p className='contacts-info'>Monday - Friday :8am to 5pm </p>
        
            </Col>

            <Col className='mt-5'>
            <h4 className='contacts-info'>Contacts & Location </h4>
            <Row className='d-flex '>
                {/* <img className='contacts-logo' src={location} alt='location'/> */}
                <p className='contacts-info'>Nairobi ,Kenya</p>
            </Row>

            <Row className='d-flex '>
                {/* <img className='contacts-logo' src={telephone} alt='location'/> */}
                <p className='contacts-info'>0712 345 678</p>
            </Row>


            <Row className='d-flex '>
                {/* <img className='contacts-logo' src={email} alt='location'/> */}
                <p className='contacts-info'>samdistributors.co.ke</p>
            </Row>
            
            
            </Col>
        </Row>





    {/* Credits section  */}
        <Row>
            <p className='credits text-center'>Designed and Made By: <a href='https://www.linkedin.com/in/geoffrey-gichaga-234318ba/' target='_blank' rel="noreferrer"><span>Geoffrey Gichaga.G</span></a></p>

        </Row>
    </Container>
  )
}

export default Footer