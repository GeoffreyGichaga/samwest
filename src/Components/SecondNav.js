import React, { useState } from 'react'
import { Container,Nav, Row, Col, Navbar, Button, FormControl, Form,Tab,Offcanvas } from 'react-bootstrap'
import shoppingcart from '../assets/shoppingcart.png'
import { NavIcon, SearchIcon } from './icons'



const SecondNav = ({openSideNav}) => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
  return (
    <>
      <Navbar  bg='black'>
        <Nav.Item className='d-flex'>
          <div >
          <Button onClick={handleShow} id='sideNav'>
            <NavIcon/>
            Menu
          </Button>

          </div>

        </Nav.Item>


        

      <Offcanvas id='offcanvas' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} lg={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link id='side-links' eventKey="first">Food</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="second">Drinks</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="third">Personal Care</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="fourth">Detergents</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>


























        <Nav.Item>
          <Nav.Link className='whitelinks' href="/home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className='whitelinks' href="/home">About </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link className='whitelinks' href="/home">Contact</Nav.Link>
        </Nav.Item>

        
      </Navbar>





    {/* <Navbar bg='light'  expand="lg">
          <Container fluid>
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="Nav me-auto my-2 my-lg-0 ms-lg-auto d-flex justify-content-center"> 
                    



              </Nav>
                

              

            </Navbar.Collapse>
          </Container>
        </Navbar> */}

</>





  )
}

export default SecondNav