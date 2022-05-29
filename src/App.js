import './App.css';
import Onboarding from './Pages/Onboarding';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';



function App() {
  
  return (


    <BrowserRouter>
      <Routes> 
        <Route exact path='*' element={<Onboarding/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
          
        
        



        



        
      </Routes>
    </BrowserRouter>
    

    
    
    
  );
}

export default App;
