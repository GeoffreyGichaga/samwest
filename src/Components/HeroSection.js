import {Container, Row, Col,Nav } from 'react-bootstrap';
import '../Styling/HeroSection.css'


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
                hello2
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselItem;