import React from 'react'
import { Nav,Tab,Col,Row, Button } from 'react-bootstrap'
import '../Styling/Sidenav.css'
import sideNavData from '../Components/Data'
import user from '../assets/user.png'


const SideNav = () => {

  
  return (
    <>
    {/* {sideNavData.map((data)=>{
        return (
            <Tab.Container className='tab-content'  defaultActiveKey="first">
                <Row  >
                    <Col className='bg-black' sm={3}>
                        <Nav   variant="pills" className="flex-column">
                            <Nav.Item  className='bg-black mt-3'>
                                <Nav.Link className=' bg-black'  eventKey="first">
                                    <image src={data.icon} alt='icon'/>
                                    <span className='side-text'>{data.title}</span>
                                </Nav.Link>
                            </Nav.Item>
                            
                        </Nav>

                    </Col>

                </Row>

            </Tab.Container>

        )
    })} */}




            <Tab.Container className='tab-content'  defaultActiveKey="first">
                <Row  >
                    <Col className='bg-black mt-3 '  md={1} lg={4}>
                        <Nav   variant="pills" className="flex-column">
                            <Nav.Item className='ms-3 mt-2'>
                                <img src={user} alt='user' className='menu-icons'/>
                                
                                <span className='acc-name  mt-5  ms-3'>Geoffrey Gichaga</span>

                            </Nav.Item>
                            
                            
                            
                            <Nav.Item  className=' mt-3'>
                                {sideNavData.map((data)=>{
                                    return(
                                        <Nav.Link href={data.path} className='mb-4 bg-black '  eventKey="first">
                                            {data.icon} 
                                            <span className='side-text ms-3'>{data.title}</span>
                                        </Nav.Link>
                                    )
                                })}
                            </Nav.Item>
                            <Button className='logout-btn  mb-3'>
                                Logout
                            </Button>
                            
                        </Nav>

                    </Col>

                </Row>

            </Tab.Container>

        
    
    </>

)}

    
    
   
  


export default SideNav