
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import PirateOffers from './components/PirateOffers';

import './App.css';

function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/crew' component={PirateOffers} />
      </Switch>
    </div>
  );
}


export default App;
