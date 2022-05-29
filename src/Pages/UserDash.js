import React from 'react'
import { Container,Row,Col,Nav,CardGroup } from 'react-bootstrap'
import SideNav from '../Components/SideNav'
import TopNav from '../Components/TopNav'
import Footer from '../Components/Footer'
import '../Styling/Cart.css'
import pembe from '../assets/pembe.jpg'
import Item from '../Components/Item'



const Cart = () => {


    const product = {
        id:1,
        picture:pembe,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    }
  return (
      <>
      <TopNav/>
      


        <Container fluid className=' bg-black'>
            <Row>


            
                <Col className='mt-3'>
                    <Nav.Item className=' d-flex justify-content-start' >
                    <Nav.Link className='whitelinks' href="/home">Home</Nav.Link>
                    <Nav.Link className='whitelinks' eventKey="link-1">About</Nav.Link>
                    <Nav.Link className='whitelinks' eventKey="link-2">Contacts</Nav.Link>
                    <Nav.Link className='whitelinks' eventKey="link-3">Cart</Nav.Link>


                    </Nav.Item>
                </Col>

                
                
            </Row>


        </Container>

        <Container fluid>
            <Row className='d-flex '>

                <Col sm={12} md={6} lg={6}>
                    <SideNav/>
                </Col>


               <Col lg={3} >
               <CardGroup>
                    <Item picture={product.picture} productName={product.productName} price={product.price}/>


                </CardGroup>
                   
               </Col>

            </Row>


        </Container>


      <Footer/>
      </>
    
  )
}

export default Cart