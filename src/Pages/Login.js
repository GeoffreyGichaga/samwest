import React, { useState } from 'react'
import { Container, Card, Col, Row,Form,Button, Alert } from 'react-bootstrap'
import '../Styling/Login.css'
import logisticslogo from '../assets/logisticslogo.png'
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './Firebase'

const Login = () => {

    const [email,setEmail] = useState('')
    const [paswd,setPaswd] = useState('')

    const [error,setError] = useState('')

  

      function handleSubmit(event){
        event.preventDefault()
        
      }

      function displayError(error){
          if(error.code ===AuthErrorCodes.INVALID_PASSWORD)
          { 
              const alert = ()=>{return(
                  <Alert variant='danger'>
                      You have entered Wrong Password!!

                  </Alert>
              )}
               setError(alert)

          } else if(error.code ===AuthErrorCodes.INVALID_EMAIL)
          {
            const alert = ()=>{return(
                <Alert variant='danger'>
                    You have entered Wrong Email!!

                </Alert>
            )}
             setError(alert)

          }

      }
    


    const loginUser = async ()=>{
        try{

        const user = await signInWithEmailAndPassword(auth,email,paswd)
        console.log(user);
        } catch(error){
            displayError(error);
        }

    }


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
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='login-text'>Username</Form.Label>
                        <Form.Control onChange={(event)=>{setEmail(event.target.value)}} id='input1' className='login-text' type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='login-text'>Password</Form.Label>
                        <Form.Control onChange={(event)=>{setPaswd(event.target.value)}} id='input2' className='login-text' type="password" placeholder="Password" />
                    </Form.Group>
                    <a id='small-text2' className='small-text2' href='/signup'>Not registered yet? Create an Account</a> <br/>

                    <Form.Text  className="error ">
                        {error} 
                            
                        </Form.Text>
                    
                    <div className='d-flex justify-content-center mt-4 mt-lg-4'>
                        <Button onClick={loginUser} id='loginButton' className='login-btn' variant="primary" type="submit">
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