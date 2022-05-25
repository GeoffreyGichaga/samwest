import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import blueband from '../assets/blueband.jpg'
import rice from '../assets/rice.png'
import wheat from '../assets/wheat.jpg'
import '../Styling/Brand.css'

const Brands = () => {
  return (
    <Container className='mt-5 d-flex justify-content-between'>
        
        <img className='brand-Imgs' src={blueband} alt='blueband'/>
        <img className='brand-Imgs' src={rice} alt='rice'/>
        <img className='brand-Imgs' src={wheat} alt='wheat'/>
        <img className='brand-Imgs' src={blueband} alt='blueband'/>


        

    </Container>
  )
}

export default Brands