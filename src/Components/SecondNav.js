import React, { useState } from 'react'
import { Nav,Navbar, Button, Offcanvas } from 'react-bootstrap'
import { NavIcon } from './icons'
import { useNavigate } from 'react-router-dom'
import Shop from '../Pages/Shop' 
import Orders from '../Pages/Orders'
import Inbox from '../Pages/Inbox'
import Offers from '../Pages/Offers'
import SavedItems from '../Pages/SavedItems'
import Help from '../Pages/Help'




import shopcart from '../assets/shoppingcart.png'
import orders from '../assets/shoppingbag.png'
import email from '../assets/email.png'
import discount from '../assets/discount.png'
import heart1 from '../assets/heart1.png'
import question from '../assets/question.png'
import { Routes } from 'react-router-dom'


const SecondNav = ({handleLogout}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogoutBtn(){
    handleLogout()
  }

  



  
  
  return (
    <>
    <Routes path='/shop' element={<Shop/>}/>
    <Routes path='/orders' element={<Orders/>}/>
    <Routes path='/inbox' element={<Inbox/>}/>
    <Routes path='/offers' element={<Offers/>}/>
    <Routes path='/savedItems' element={<SavedItems/>}/>
    <Routes path='/help' element={<Help/>}/>
    
      <Navbar bg='black'>


        <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement="start"
            show={show}
            onHide={handleClose}
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='mt-5 mb-2' id='offcanvasNavbarLabel-expand-lg'>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mb-5">
                
                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/shop')} id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={shopcart} alt='logo'/></span>
                    Shop
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/orders')} id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={orders} alt='logo'/></span>
                    Orders
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/inbox')}  id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={email} alt='logo'/></span>
                    Inbox
                    </Nav.Link>
                </Nav.Item>


                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/offers')} id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={discount} alt='logo'/></span>
                    Offers
                    </Nav.Link>
                </Nav.Item>


                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/savedItems')} id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={heart1} alt='logo'/></span>
                    Saved Items
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className='mb-3'>
                  <Nav.Link onClick={()=>navigate('/help')} id='side-links' eventKey="third">
                    <span><img className='logo-img mx-3' src={question} alt='logo'/></span>
                    Help
                    </Nav.Link>
                </Nav.Item>
                
              </Nav>
              <div className='d-flex justify-content-center'>
                <Button onClick={handleLogoutBtn}>Logout</Button>
              </div>
              
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        


        



        <Nav.Item>
          <Button onClick={handleShow} id='menubtn'>
            <NavIcon  />
          </Button>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link id='side-links' href="/home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link id='side-links1' href="/home">About </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link id='side-links2' href="/home">Contact</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link id='side-links3' eventKey="link-3">Cart</Nav.Link>

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