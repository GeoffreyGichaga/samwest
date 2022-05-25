import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import '../Styling/Item.css'
// import pembe from '../assets/pembe.jpg'
import heart1 from '../assets/heart1.png'
import heart2 from '../assets/heart2.png'


const Item = ({picture,productName,price}) => {
    const [like,setLike] = useState(heart1)

    function handleLikeBtn(){
        if(like===heart1)
        {
            setLike(heart2)

        }else{ setLike(heart1)}
        
  
    }
  return (
        <Card className='card card mt-5 ms-5'>
            <Card.Img className='item-images ms-5 mt-3 w-50' variant="top" src={picture} />
            <Card.Body>
                <Card.Title className='card-text1 mt-3'>{productName}</Card.Title>
                <Card.Text className='card-text2'>
                    <p>Ksh {price}</p>
                    <p>Eligible for free delivery for orders above 12 Packs in Nairobi, Kiambu, and Kajiado </p>

                </Card.Text>
                <div className='mt-3'>
                    <img onClick={handleLikeBtn} className='heart-icons' src={like} alt='like'/>
                    <Button className='add-to-cart  ms-4'>Add to Cart</Button>
                </div>
            </Card.Body>
            
        </Card>


        // <Card className='card mt-5 ms-5'>
        // <Card.Img className='item-images ms-5 mt-3 w-50' variant="top" src={pembe} />
        // <Card.Body>
        // <Card.Title className='card-text1 mt-3'>
        //     <h6>Pembe Maize meal -2kg</h6>
        // </Card.Title>
        // <Card.Text className='card-text2'>
        //     <p>Ksh 1200</p>
        //     <p>Eligible for free delivery for orders above 24 Packs in Nairobi, Kiambu, and Kajiado </p>
        // </Card.Text>
        // <div className='mt-3'>
        //     <img onClick={handleLikeBtn} className='heart-icons' src={like} alt='like'/>
        // <Button className='add-to-cart  ms-4'>Add to Cart</Button>
        // </div>
        // </Card.Body>
        // </Card>
    
  )
}

export default Item