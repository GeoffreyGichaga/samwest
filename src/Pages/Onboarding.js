import React from 'react'
import { Button, Col, Container, Nav,Navbar, Row } from 'react-bootstrap'
import '../Styling/Onboarding.css'
import image1 from '../assets/image1.png'
import logo from '../assets/logo.png'
import { Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'

const Onboarding = () => {

    const navigate = useNavigate()

    
  return (
    <Container>
        <Navbar bg="black" variant="dark">
            <Container>
            <Nav className="ms-auto">
            <Link to='/login' id='navlinks' href="#login">Login</Link>
            <Link to='/Signup' id='navlinks2' href="#Signup">Register</Link>
            </Nav>
            </Container>
        </Navbar>

        <Routes path='/login' element={<Login/>}/>
        <Routes path='/Signup' element={<Signup/>}/>


        <Container className='mt-5'>
            <Row>
                <Col sm={12} md={6} lg={6} className='left-col start'>
                    <div className='d-flex justify-content-center mt-5 mb-1'>
                        <img id='logo' src={logo} alt='logo'/>
                    </div>
                    <h3 className='site-name text-center mb-5'>Samwest Distributors</h3>
                    <div className='mt-4'>
                        <p>We Provide:</p>
                        <ul>
                            <li>Quality Products</li>
                            <li>Free Deliveries within Nairobi</li>
                            <li>Safe and In time deliveries of your goods</li>
                        </ul>
                        <div className='d-flex justify-content-center mb-3'>
                        <Button onClick={()=>navigate('/Signup')} id='start-btn'>Get Started</Button>
                        </div>
                    </div>

                </Col>
                <Col>
                <img id='image1' className='mt-5 mb-4' src={image1} alt='Logo'/>
                </Col>
            </Row>
        </Container>

    </Container>
  )
}

export default Onboarding