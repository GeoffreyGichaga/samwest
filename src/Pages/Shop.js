import React from 'react'
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import SecondNav from '../Components/SecondNav';
import CarouselItem from '../Components/HeroSection';
import Products from '../Components/Products';
import { Container, Row } from 'react-bootstrap';
import '../Styling/Shop.css'
import Brands from '../Components/Brands';




function Shop(){

    return(
        <>
        <TopNav/>
        <SecondNav/>
        <CarouselItem/>
        <Container className='mt-4'>
            <Row className='featured-bar'>
                <h4 className='ft-title mt-2'>Featured Products</h4>
            </Row>
        </Container>
        <Products/>
        <Brands/>
        <Footer/>

        </>
    )
}

export default Shop;