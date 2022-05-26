import React from 'react'
import Brands from '../Components/Brands';
// import CarouselItem from '../Components/Carousel';
import CoProfile from '../Components/CoProfile';
import Item from '../Components/Item';
import Products from '../Components/Products';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer'
import UserDash from './UserDash';
import Signup from './Signup';
import Login from './Login';
import CarouselItem from '../Components/Carousel'
import SecondNav from '../Components/SecondNav';
import { Col, Container, Row,Tab,Nav,Carousel } from 'react-bootstrap';
import kitchen from '../assets/Kitchen.png'
import lemon from '../assets/lemon.png'
import '../Styling/Home.css'
import SideNav from '../Components/SideNav';
import SideMenu from '../Components/SideMenu';



 const Home = () => {
  return (
    <>

    {/* <TopNav/>
    <SecondNav/>
    <CarouselItem/>
    

    
    <CoProfile/>  */}
    {/* <Products/>  */}
    
    {/* <div className='mt-5 ms-5'>
            <h3>Top Brands</h3>
        </div>
    <Brands/>
    <Footer/> */}
    {/* <Cart/> */}
    {/* <UserDash/> */}
    <Signup/>
    
    

    </>
  )
}


export default Home;