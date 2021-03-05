import './App.css';
import Login from './views/login/login';
import Home from './views/Home/Home';
import Vote from './views/Vote/Vote';
import Result from './views/Result/Result';
import Count from './views/Count/Count';
import State from './views/State/State';
import Candidate from './views/Candidate/Candidate';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/vote" component={Vote}/>
          <Route path="/result" component={Result}/>
          <Route path="/count" component={Count}/>
          <Route path="/state" component={State}/>
          <Route path="/candidate" component={Candidate}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
