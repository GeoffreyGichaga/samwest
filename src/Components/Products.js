import { useEffect, useState } from 'react'
import { CardGroup, Col, Container,Row } from 'react-bootstrap'
import Item from './Item';






const Products = () => {
  


  const [Items,setItems] = useState([])
  

    useEffect(()=>{
      fetch("https://samwest-server.herokuapp.com/shop", {
        method: "GET",
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