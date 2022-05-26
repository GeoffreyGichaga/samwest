import React from 'react'
import { Container, Card, Col, Row,Form,Button } from 'react-bootstrap'
import '../Styling/Login.css'
import logisticslogo from '../assets/logisticslogo.png'

const Login = () => {
  return (
    <Container className=''>
        <Row className='d-flex justify-content-center mt-lg-5 m-lg-5'>
            <Col sm={12} md={6} lg={6} className='yellow-side mt-lg-5 '>
                <div className='d-flex justify-content-center mt-5 '>
                    <img className='logo mt-5 mb-5 item-' src={logisticslogo} alt='logo'/>

                </div>

                <div className='d-flex justify-content-center  mb-lg-5'>
                    <h3 className='login-text'>SamWest Distributors</h3>
                </div>
                

                

            </Col>
            
            <Col className='mt-lg-5'>
                <div className='mt-5'>
                    <h4 className='login-main text-center '>Login</h4>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='login-text'>Username</Form.Label>
                        <Form.Control id='input1' className='login-text' type="email" placeholder="Enter email" />
                        <Form.Text className="small-text text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='login-text'>Password</Form.Label>
                        <Form.Control id='input2' className='login-text' type="password" placeholder="Password" />
                    </Form.Group>
                    <a id='small-text2' className='small-text2' href='/signup'>Not registered yet? Create an Account</a>
                    
                    <div className='d-flex justify-content-center mt-4 mt-lg-4'>
                        <Button id='loginButton' className='login-btn' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            
            </Col>
        </Row>
        

    </Container>
  )
}

export default Login