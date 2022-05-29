import './App.css';
import Home from './Pages/Home';
import Loginpage from './Pages/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Onboarding from './Pages/Onboarding';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Onboarding/>
        </Route>

        
      </Switch>
      
    </Router>
  );
}

export default App;
