import React from 'react'
import { Container,CardGroup,Card, Row, Col } from 'react-bootstrap'
import coin from '../assets/coin.png'
import quality from '../assets/quality.png'
import delivery from '../assets/delivery.png'
import '../Styling/CoProfile.css'


const CoProfile = () => {
  return (
    <Container  className='mt-4'>
        <CardGroup >
            <Card >
                <Card.Body>
                    <Row  className='d-flex'>
                        <Col className='col-3  mt-3'>
                            <img className='profileicons' src={coin} alt='E-Cash'/>
                        </Col>
                        
                        <Col>
                        <Card.Text className='mt-4'>
                            Online Payment
                        </Card.Text>

                        </Col>
                        

                    </Row>

               
                </Card.Body>
                
            </Card>


            <Card>
                <Card.Body>
                    <Row>
                        <Col className='col-3 mt-3'>
                            <img className='profileicons' src={delivery} alt='E-Cash'/>
                        </Col>
                        <Col>
                        <Card.Text className='mt-4'>
                            Fast Delivery
                        </Card.Text>

                        </Col>
                    </Row>

               
                </Card.Body>
                
            </Card>

            <Card>
                <Card.Body>
                    <Row>
                        <Col className='col-3 mt-3'>
                            <img className='profileicons' src={quality} alt='E-Cash'/>
                        </Col>
                        <Col>
                        <Card.Text className='mt-4'>
                            Quality Products                            
                        </Card.Text>

                        </Col>
                    </Row>

               
                </Card.Body>
                
            </Card>
            
            
        </CardGroup>
    </Container>
  )
}

export default CoProfile