import React from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import products from './Data'
import Item from './Item'
import Commerce from '@chec/commerce.js';

// import pembe from '../assets/pembe.jpg'


const Products = () => {
  const commerce = new Commerce('pk_435622d094811829421e75565cfe2b23529d005594a14');
  const data = commerce.products.list({
                  category_slug: ['shoes'],
                  }).then(response => response.data);
  console.log(data);

  return (
    <Container fluid className=' d-flex justify-content-center'>
        
        {/* {products.map((product)=>{
          return(
            <CardGroup>
              <Item picture={product.picture} productName={product.productName} price={product.price}/>


            </CardGroup>

          )
        })} */}

        


    </Container>
  )
}

export default Products