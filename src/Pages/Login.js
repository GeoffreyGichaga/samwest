import React, { useState } from 'react'
import { Container, Col, Row,Form,Button, Alert } from 'react-bootstrap'
import '../Styling/Login.css'
import hero from '../assets/hero.png'
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './Firebase'
import { Link, Routes, useNavigate } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
    const navigate = useNavigate()
    



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
        .then((response)=>{
            navigate('/home')

            sessionStorage.setItem('Auth Token',response._tokenResponse.refreshToken)
        })
        console.log(user);
        } catch(error){
            displayError(error);
        }

    }

    


  return (
    <Container className=''>
                <Routes exact path='/Signup' element={<Signup/>}/>

        <Row className='d-flex justify-content-center mt-lg-5 m-lg-5'>
            <Col sm={12} md={6} lg={6} className='black-side mt-lg-5 '>
                <img id='image1' className='mt-5 mb-4' src={hero} alt='Logo'/>

            </Col>
            
            <Col className='mt-lg-5'>
                <div className='mt-5'>
                    <h4 className='login-main text-center '>Login</h4>
                </div>
                <Form onSubmit={handleSubmit} className='mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id='login-text1'>Username</Form.Label>
                        <Form.Control onChange={(event)=>{setEmail(event.target.value)}} id='input1'  className='login-text' type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label id='login-text2'>Password</Form.Label>
                        <Form.Control onChange={(event)=>{setPaswd(event.target.value)}} id='input2'  className='login-text' type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/Signup' id='small-text2' className='small-text2' href='/signup'>Not registered yet? Create an Account</Link> <br/>

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