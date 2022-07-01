import './App.css';
import Onboarding from './Pages/Onboarding';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Shop from './Pages/Shop' 
import Orders from './Pages/Orders'
import Inbox from './Pages/Inbox'
import Offers from './Pages/Offers'
import SavedItems from './Pages/SavedItems'
import Help from './Pages/Help'



function App() {
  
  return (


    
      <BrowserRouter>
      <Routes> 
        <Route exact path='*' element={<Onboarding/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='shop' element={<Shop/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route exact path='/inbox' element={<Inbox/>}/>
        <Route exact path='/offers' element={<Offers/>}/>
        <Route exact path='/savedItems' element={<SavedItems/>}/>
        <Route exact path='/help' element={<Help/>}/>
          
        
      </Routes>
    </BrowserRouter>
    

    
    
    
  );
}

export default App;
