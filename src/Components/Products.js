import React, { useEffect, useState } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import Item from './Item'
import Commerce from '@chec/commerce.js';
import pembe from '../assets/pembe.jpg'
import elianto from '../assets/elianto.png'
import rice from '../assets/rice.png'


// import pembe from '../assets/pembe.jpg'


const Products = () => {

  const products = [
    
    {
        id:1,
        picture:pembe,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    },
    {
        id:2,
        picture:elianto,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    },
    {
        id:3,
        picture:rice,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    }
]

  
  

  return (
    <Container fluid className=' d-flex justify-content-center'>
        {products.map((product)=>{
          return (
            <CardGroup>
            <Item picture={product.picture} productName={product.productName} price={product.price}/>


          </CardGroup>

          )
        })}



  
        
        

        


    </Container>
  )
}

export default Products