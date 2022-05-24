import React from 'react'
import { Container,Nav, Navbar,Form,FormControl, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo.png'
import shoppingcart from '../assets/shoppingcart.png'

import '../Styling/Navbars.css'

const TopNav = () => {

  return (
    <>
      <Container fluid >
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <img className='logoimg' src={logo} alt='Logo'/>
            <Navbar.Brand className='ms-3' href="#">
              Samwest Distributors
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="Nav me-auto my-2 my-lg-0 d-flex justify-content-center"> 
                <Form className="form">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className=""
                    aria-label="Search"
                  />
                </Form>


              </Nav>
              <a href='#home' className='login-reg'>Login / Register</a>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>


      <Container fluid className=' bg-black'>
        <Row>


          <Col className='mt-3'>
          <Nav.Link className='whitelinks' href="/home">Categories</Nav.Link>

          </Col>


          <Col className='mt-3'>
            <Nav.Item className=' d-flex justify-content-center' >
              <Nav.Link className='whitelinks' href="/home">Home</Nav.Link>
              <Nav.Link className='whitelinks' eventKey="link-1">About</Nav.Link>
              <Nav.Link className='whitelinks' eventKey="link-2">Contacts</Nav.Link>
            </Nav.Item>
          </Col>

          <Col className='mt-3 d-flex justify-content-end'>
            <Nav.Item>
              <Nav.Link  eventKey="link-3" disabled>
                <img className='shoppingcart ' src={shoppingcart} alt='Cart'/>
                

              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>

       

      </Container>

    

    
    
    </>
  )
}

export default TopNav