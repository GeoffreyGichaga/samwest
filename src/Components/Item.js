import React from 'react'
import { Card, Button } from 'react-bootstrap'
import pembe from '../assets/pembe.jpg'
import '../Styling/Item.css'

const Item = () => {
  return (
    <Card className='card'>
    <Card.Img className='item-images ms-5' variant="top" src={pembe} />
    <Card.Body>
      <Card.Title>Pembe Maize Flour</Card.Title>
      <Card.Text>
        12 Packs <br/>
        Ksh 1200
      </Card.Text>
      <Button className='add-to-cart'>Add to Cart</Button>
    </Card.Body>
  </Card>
    
  )
}

export default Item