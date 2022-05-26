import React from 'react'
import { Container,Nav, Navbar,Form,FormControl, Row, Col, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import shoppingcart from '../assets/shoppingcart.png'
import '../Styling/Navbars.css'
import { SearchIcon, UserIcon } from './icons'
import SecondNav from './SecondNav'

const TopNav = () => {

  return (
    <>
    {/* First NavBar */}
      <Container fluid >
        
        <Navbar  bg="light" expand="lg">
          <Container fluid>
            <img className='logoimg' src={logo} alt='Logo'/>
            <Navbar.Brand className='ms-3' href="#">
              Samwest Distributors
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Navbar className="Nav me-auto my-2 my-lg-0 ms-lg-auto d-flex justify-content-center"> 
                    <Form  className="form">
                      <div className='input-group'>
                        <FormControl
                          id='search-bar'
                          type="search"
                          placeholder="Search"
                          className="form-control"
                          aria-label="Search"
                        />
                        <Button id='searchBtn'>
                          <span>
                          <SearchIcon/>
                          </span>
                        </Button>
                      </div>
                    </Form>

                    <div className='d-flex justify-content-end'>
                      <UserIcon/>
                
                      <a href='#home' className='login-reg ms-2 '>Login / Register</a>
                    </div>
                    



              </Navbar>
              
               
              

            </Navbar.Collapse>
          </Container>
        </Navbar>

        
      </Container>


      
    {/* End of First NavBar */}




      


    

    
    
    </>
  )
}

export default TopNav