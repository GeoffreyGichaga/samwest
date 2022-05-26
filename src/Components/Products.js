import React from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import products from './Data'
import Item from './Item'
// import pembe from '../assets/pembe.jpg'


const Products = () => {
  return (
    <Container fluid className=' d-flex justify-content-center'>
        
        {products.map((product)=>{
          return(
            <CardGroup>
              <Item picture={product.picture} productName={product.productName} price={product.price}/>


            </CardGroup>

          )
        })}


    </Container>
  )
}

export default Products