import React, { useState } from 'react'
import { Container,Col, Row,Form,Button,Alert } from 'react-bootstrap'
import '../Styling/Signup.css'
import hero from '../assets/hero.png'
import { Link, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const Signup = () => {
    const navigate = useNavigate()

    const [userFirstname,setUserFirstname] = useState('')
    const [userLastname,setUserLastname] = useState('')

    const [userPhone,setUserPhone] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userPaswd,setUserPaswd] = useState('')

    const [error,setError] = useState('')

  

      function handleSubmit(event){
        event.preventDefault()
        
      }

      <Routes path='/home' element={<Home/>}/>

      const registerUsers = ()=>{
        fetch('https://samwest-server.herokuapp.com/signup',{
            method:"POST",
            headers:{
              "content-Type":"application/json"
            },
            body:JSON.stringify({
                first_name: userFirstname,
                last_name : userLastname,
                email : userEmail,
                phonenumber : userPhone,
                password : userPaswd
            })
           } )
           .then(navigate('/home'))
           

        }
    


    // const registerUsers = async ()=>{
    //     try{

    //     const user = await fetch(auth,userEmail,userPaswd)
    //     .then((response)=>{
    //         navigate('/home')

    //     })
    //     console.log(user);
    //     } catch(error){
    //         displayError(error);
            
    //     }

        

    // }

    function displayError(error){
        if(error.code === 401)
        { 
            const alert = ()=>{return(
                <Alert variant='danger'>
                    You already have an Account ,Try to Login!!

                </Alert>
            )}
             setError(alert)

        } else if(error.code === 200)
        {
          navigate('/home')

        }

    }
  return (

    <Container className=''>
                <Routes exact path='/login' element={<Login/>}/>

        <Row className='d-flex justify-content-center mt-lg-5 m-lg-5'>
            <Col sm={12} md={6} lg={6} className='black-side mt-lg-5 '>
                <img id='image1' className='mt-5 mb-4' src={hero} alt='Logo'/>

            </Col>
            
            <Col className='mt-lg-3'>
                <div className=' mt-3 mt-lg-0'>
                    <h4 className='login-main text-center '>Register Your Account</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                        <Form.Label className='signup-labels'>First Name</Form.Label>
                        <Form.Control onChange={(event)=>{setUserFirstname(event.target.value)}} id='input1' name='fname' className='login-text' type="text"  placeholder="e.g John" />

                        <Form.Label className='signup-labels'>Last Name</Form.Label>
                        <Form.Control onChange={(event)=>{setUserLastname(event.target.value)}} id='input2' name='fname' className='login-text' type="text"  placeholder="e.g Doe" />


                        <Form.Label className='signup-labels'>Phonenumber</Form.Label>
                        <Form.Control onChange={(event)=>{setUserPhone(event.target.value)}} id='input3' name='phone' className='login-text'  type="text" placeholder="0712 345 678" />

                        <Form.Label className='signup-labels'>Username</Form.Label>
                        <Form.Control onChange={(event)=>{setUserEmail(event.target.value)}} id='input4' name='username' className='login-text'  type="email" placeholder="abc@gmail.com" />

                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='signup-labels'>Password</Form.Label>
                        <Form.Control onChange={(event)=>{setUserPaswd(event.target.value)}} id='input5' name='paswd' className='login-text'  type="password"  />
                    </Form.Group>
                    <Link to='/login' id='small-text2' className='small-text2' href='/signup'>Have an Account Already? Login</Link> <br/>
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