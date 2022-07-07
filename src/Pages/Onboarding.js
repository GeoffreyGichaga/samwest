import React from 'react'
import { Button, Col, Container, Nav,Navbar, Row } from 'react-bootstrap'
import '../Styling/Onboarding.css'
import hero from '../assets/hero.png'
import pyramids from '../assets/pyramids.png'
import { Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Footer from '../Components/Footer'

const Onboarding = () => {

    const navigate = useNavigate()

    
  return (
      <>
        <Container>
            <Navbar collapseOnSelect expand='lg'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" placement='end' />


                <Navbar.Brand className='ms-sm-3 ms-lg-2' href="#home">
                    <img
                        src={pyramids}
                        width="45"
                        height="45"
                        alt="SW logo"
                        className='d-block justify-content-center ms-3'
                    /> Samwest 

                </Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-center flex-grow-1 pe-3 ms-lg-5 mt-lg-5'>
                    <Nav.Link className='ms-lg-2' id='navlinks'>Home</Nav.Link>
                    <Nav.Link id='navlinks2'>About Us</Nav.Link>
                    <Nav.Link id='navlinks3'>Services</Nav.Link>
                    <Nav.Link id='navlinks4'>Contact Us</Nav.Link>

                </Navbar.Collapse>



                {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-center">
                        <Link to='/login' id='navlinks' href="#login">Login</Link>
                        <Link to='/Signup' id='navlinks2' href="#Signup">Register</Link>
                        <Link to='/login' id='navlinks' href="#login">Login</Link>
                    </Nav>
                </Navbar.Collapse> */}

            </Navbar>
        </Container>



    <Container>
        
        {/* <Link to='/login' id='navlinks' href="#login">Login</Link>
                        <Link to='/Signup' id='navlinks2' href="#Signup">Register</Link>
 */}

        <Routes path='/login' element={<Login/>}/>
        <Routes path='/Signup' element={<Signup/>}/>


        <Container className='mt-5'>
            <Row className='d-flex'>
                <Col sm={12} md={6} lg={6} className='left-col  mt-3'>
                    <h3 className='slogan-title'>East or West,</h3>
                    <h3 className='slogan-title'>SamWest is the Best!</h3>
                    
                    <div className='mt-4'>
                        <p>We Provide you with a platform where you can:</p>
                        <ul>
                            <li>Order Quality Products</li>
                            <li>Get Free Deliveries within Nairobi</li>
                            <li>Have Safe and On time deliveries </li>
                        </ul>
                        <div className='d-flex justify-content-start mb-3 mt-4'>
                        <Button onClick={()=>navigate('/Signup')} id='start-btn'>Get Started</Button>
                        </div>
                    </div>

                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img id='hero-image' className='mt-5 mb-4' src={hero} alt='Logo'/>
                </Col>
            </Row>
        </Container>


    </Container>
    <Footer/>
    
    </>
  ) 
}

export default Onboarding