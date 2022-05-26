import React, { useState } from 'react'
import { Container,Col, Row,Form,Button,Alert } from 'react-bootstrap'
import '../Styling/Signup.css'
import logisticslogo2 from '../assets/logisticslogo2.png'
import {AuthErrorCodes, createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase'
import { BrowserRouter as Route, Switch, Router } from 'react-router-dom'

const Signup = () => {
    // const [userFullname,setUserFullname] = useState('')
    // const [userPhone,setUserPhone] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userPaswd,setUserPaswd] = useState('')

    const [error,setError] = useState('')

  

      function handleSubmit(event){
        event.preventDefault()
        
      }
    


    const registerUsers = async ()=>{
        try{

        const user = await createUserWithEmailAndPassword(auth,userEmail,userPaswd)
        } catch(error){
            alert(error.message);
        }

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
  return (
    <Container className=''>
        <Row className='d-flex justify-content-center mt-lg-5 m-lg-5'>
            <Col sm={12} md={6} lg={6} className='black-side mt-lg-5 '>
                <div className='d-flex justify-content-center mt-5 '>
                    <img className='logo mt-5 mb-5 item-' src={logisticslogo2} alt='logo'/>

                </div>

                <div className='d-flex justify-content-center  mb-lg-5'>
                    <h3 className='site-Name'>SamWest Distributors</h3>
                </div>
                

                

            </Col>
            
            <Col className='mt-lg-5'>
                <div className=' mt-3 mt-lg-0'>
                    <h4 className='login-main text-center '>Register Your Account</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                        {/* <Form.Label id='input1' className='login-heads'>FullNames</Form.Label>
                        <Form.Control onChange={(event)=>{setUserFullname(event.target.value)}} id='input1' name='fname' className='login-text' type="text"  placeholder="Enter Your names" />

                        <Form.Label id='input2' className='login-heads'>Phonenumber</Form.Label>
                        <Form.Control onChange={(event)=>{setUserPhone(event.target.value)}} id='input2' name='phone' className='login-text'  type="text" placeholder="Enter Phonenumber" /> */}

                        <Form.Label  className='login-heads'>Username</Form.Label>
                        <Form.Control onChange={(event)=>{setUserEmail(event.target.value)}} id='input3' name='username' className='login-text'  type="email" placeholder="Enter email" />

                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label  className='login-heads'>Password</Form.Label>
                        <Form.Control onChange={(event)=>{setUserPaswd(event.target.value)}} id='input4' name='paswd' className='login-text'  type="password" placeholder="Password" />
                    </Form.Group>
                    <a id='small-text2' className='small-text2' href='/signup'>Have an Account Already? Login</a> <br/>
                    <Form.Text  className="error ">
                        {error} 
                            
                    </Form.Text>
                    
                    <div className='d-flex justify-content-center mt-4 mt-lg-4'>
                        <Button onClick={registerUsers} id='signupButton'  className='login-btn' variant="primary" type="submit">
                            SignUp
                        </Button>
                    </div>
                </Form>
            
            </Col>
        </Row>
        

    </Container>
  )
}

export default Signup;