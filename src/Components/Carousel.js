import { Carousel, Container, Row, Col } from 'react-bootstrap';
import kitchen from '../assets/Kitchen.png'
import lemon from '../assets/lemon.png'
import '../Styling/Carousel.css'


const CarouselItem = ()=>{
    return(
        <Container className='mt-4'>
            <Row>
                <Col>
                        <Carousel>
                        <Carousel.Item className='carousel-item'>
                            <img
                            className="d-block w-75"
                            src={kitchen}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 className='carousel-caption text-center'>Household Applicances</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-75"
                            src={lemon}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className='carousel-caption text-center'>Drinks</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default CarouselItem;