import React from 'react'
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import SecondNav from '../Components/SecondNav';
import CarouselItem from '../Components/HeroSection';
import Products from '../Components/Products';




function Shop(){

    return(
        <>
        <TopNav/>
        <SecondNav/>
        <CarouselItem/>
        <Products/>
        <Footer/>

        </>
    )
}

export default Shop;