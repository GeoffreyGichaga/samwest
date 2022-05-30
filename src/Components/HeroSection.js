import {Container, Row, Col,Nav,Carousel } from 'react-bootstrap';
import '../Styling/HeroSection.css'

import slide1img from '../assets/slide1img.png'
import slide2img from '../assets/slide2img.png'
import slide3img from '../assets/slide3img.png'


const CarouselItem = ()=>{
    return(
        <Container className='mt-4'>
            <Row>
                <Col sm={12} md={6} lg={2} className='mt-4'>
                <Nav  variant="pills" className="flex-column mb-3">
                    <Nav.Item className='tabs-nav mb-4'>
                        <Nav.Link id='tablink' eventKey="first">Food</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs-nav mb-4'>
                        <Nav.Link id='tablink1' eventKey="second">Baby Care</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs-nav mb-4'>
                        <Nav.Link id='tablink2' eventKey="third">Detergents</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='tabs-nav mb-4'>
                        <Nav.Link id='tablink3' eventKey="fourth">Stationeries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs-nav mb-4'>
                        <Nav.Link id='tablink4' eventKey="fifth">Animal Products</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>


                <Col className='mt-4'>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                            className="slide1 d-block w-75"
                            src={slide1img}
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="slide2 d-block w-75"
                            src={slide2img}
                            alt="Second slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="slide2 d-block w-75"
                            src={slide3img}
                            alt="Third slide"
                            id=''
                            />
                            
                        </Carousel.Item>
                    </Carousel>
                
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselItem;