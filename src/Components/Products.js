import { useEffect, useState } from 'react'
import { CardGroup, Col, Container,Row } from 'react-bootstrap'
import Item from './Item';
import Commerce from '@chec/commerce.js';






const Products = () => {
  


  const [Items,setItems] = useState([])
  const url = new URL("https://api.chec.io/v1/products");
  
  


    let params = {
        "limit": "6",
    };
    Object.keys(params)
     .forEach(key => url.searchParams.append(key, params[key]));

    let headers = {
        "X-Authorization": "pk_43657a047d76d9d4ec214546fdb52cad08565284565a9",
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    useEffect(()=>{
      fetch(url, {
        method: "GET",
        headers: headers,
    })
    .then(response => response.json())
    .then(dataItems => {setItems(dataItems.data)})
    },[])

    console.log(Items);

    const displayProducts = Items.map((product)=>(
     
    <CardGroup>
            <Item saveItem={handleSaveItem} addToCart={handleAddToCart} key={product.name} picture={product.image.url} productName={product.name} price={product.price.raw}/>

    </CardGroup>      

    ))

    

    function handleSaveItem(event){
      
      
      console.log(event.target.id)

    }

    function handleAddToCart(){
      
      console.log('You want to by me?')

    }

    


    

  

  
  

  return (
    <Container fluid className=' d-flex justify-content-center '>
      <Row sm={12} md={1} lg={7} >
        <Col >
          {displayProducts}
        </Col>
      </Row>
      
       

      
      
  

    </Container>
  )
}

export default Products