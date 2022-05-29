import React from 'react'
import { Button, Col, Container, Nav,Navbar, Row } from 'react-bootstrap'
import '../Styling/Onboarding.css'
import image1 from '../assets/image1.png'
import logo from '../assets/logo.png'
import CoProfile from '../Components/CoProfile'

const Onboarding = () => {
  return (
    <Container>
        <Navbar bg="black" variant="dark">
            <Container>
            <Nav className="ms-auto">
            <Nav.Link id='navlinks' href="#features">Login</Nav.Link>
            <Nav.Link id='navlinks2' href="#pricing">Register</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <Container>
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
                        <Button id='start-btn'>Get Started</Button>
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