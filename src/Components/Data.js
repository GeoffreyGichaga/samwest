import pembe from '../assets/pembe.jpg'
import shop from '../assets/shoppingcart.png'
import heart1 from '../assets/heart1.png'
import shopbag from '../assets/shoppingbag.png'
import email from '../assets/email.png'
import discount from '../assets/discount.png'
import question from '../assets/question.png'



const products = [
    
    {
        id:1,
        picture:pembe,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    },
    {
        id:2,
        picture:pembe,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    },
    {
        id:3,
        picture:pembe,
        productName:"Pembe Maize Flour - 2Kg",
        price:1200
    }
]


    

const sideNavData = [
    {
        title:"Shop",
        path:'/',
        className:'tab-content',
        icon:<img className='menu-icons' src={shop} alt='icon'/>
    },

    {
        title:"Orders",
        path:'/orders',
        className:'S-nav',
        icon:<img className='menu-icons' src={shopbag} alt='icon'/>
    },
    {
        title:"Inbox",
        path:'/inbox',
        className:'S-nav',
        icon: <img className='menu-icons' src={email} alt='icon'/>
    },
    {
        title:"Offers",
        path:'/offers',
        className:'S-nav',
        icon: <img className='menu-icons' src={discount} alt='icon'/>
    },
    {
        title:"Saved Items",
        path:'/savedItems',
        className:'S-nav',
        icon: <img className='menu-icons' src={heart1} alt='icon'/>
    },
    {
        title:"Help",
        path:'/help',
        className:'S-nav',
        icon: <img className='menu-icons' src={question} alt='icon'/>
    },
    
]
export default sideNavData ;
