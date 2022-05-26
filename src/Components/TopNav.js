import React from 'react'
import { Container,Nav, Navbar,Form,FormControl, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo.png'
import shoppingcart from '../assets/shoppingcart.png'

import '../Styling/Navbars.css'

const TopNav = () => {

  return (
    <>
    {/* First NavBar */}
      <Container fluid >
        {/* <Container >
          <Navbar className='bg-dark'>
            
          </Navbar>
        </Container> */}
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
    {/* End of First NavBar */}




      


    

    
    
    </>
  )
}

export default TopNav