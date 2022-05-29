import './App.css';
import Onboarding from './Pages/Onboarding';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';



function App() {
  
  return (


    
      <BrowserRouter>
      <Routes> 
        <Route exact path='*' element={<Onboarding/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/home' element={<Home/>}/>
          
        
      </Routes>
    </BrowserRouter>
    

    
    
    
  );
}

export default App;
