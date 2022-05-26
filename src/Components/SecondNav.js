import React from 'react'
import { Container,Nav, Row, Col } from 'react-bootstrap'
import shoppingcart from '../assets/shoppingcart.png'



const SecondNav = () => {
  return (
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
  )
}

export default SecondNav