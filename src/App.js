import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import PirateOffers from './components/PirateOffers';
import Signin from './components/SignIn';
import Login from './components/LogIn';
import UserProfile from './components/UserProfile';
import ApplyOffers from './components/ApplyOffers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Signin' component={Signin} />
        <Route path='/Login' component={Login} />
        <Route path="/Crew" component={PirateOffers} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/Apply" component={ApplyOffers} />
      </Switch>
    </div>
  );
}


export default App;
