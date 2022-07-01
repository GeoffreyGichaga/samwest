import React, { useEffect } from 'react'
import Brands from '../Components/Brands';
import Products from '../Components/Products';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';

import CarouselItem from '../Components/HeroSection'
import SecondNav from '../Components/SecondNav';
import { useNavigate } from 'react-router-dom';
import { Alert} from 'react-bootstrap';

import '../Styling/SideMenu.css'







 const Home = ({handleLogout}) => {
   const navigate = useNavigate()

 

  function logout(){
    sessionStorage.removeItem('Auth Token')
  }

   useEffect(()=>{
     let authToken = sessionStorage.getItem('Auth Token')
     if(authToken){
      navigate('/home')

     }else {
      <Alert variant='danger'>
      You have entered Wrong Details!!

      </Alert>

     }
     

   },[navigate])
  return (
    <>

    <TopNav/>
    
    <SecondNav handleLogout={logout}/>
    <CarouselItem/>
    

    
    <Products/> 
    
    <div className='mt-5 ms-5'>
            <h3>Top Brands</h3>
    </div>
    <Brands/>
    <Footer/>


    
    



    
    
    
    </>
  )
  
}


export default Home;