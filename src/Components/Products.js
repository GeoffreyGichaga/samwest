import React from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import products from '../Data'
import Item from './Item'

const Products = () => {
  return (
    <Container fluid className=' d-flex justify-content-center'>
        <CardGroup>
            <Item picture={products.img} productName={products.productName} price={products.price}/>
            <Item picture={products.img} productName={products.productName} price={products.price}/>

            <Item picture={products.img} productName={products.productName} price={products.price}/>
            <Item picture={products.img} productName={products.productName} price={products.price}/>



        </CardGroup>


    </Container>
  )
}

export default Products