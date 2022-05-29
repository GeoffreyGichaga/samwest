import {Container, Row, Col,Nav } from 'react-bootstrap';
import '../Styling/HeroSection.css'


const CarouselItem = ()=>{
    return(
        <Container className='mt-4'>
            <Row>
                <Col>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link id='tablink' eventKey="first">Food</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='tablink1' eventKey="second">Baby Care</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='tablink2' eventKey="third">Detergents</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link id='tablink3' eventKey="fourth">Stationeries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='tablink4' eventKey="fifth">Tab 5</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col>
                hello2
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselItem;