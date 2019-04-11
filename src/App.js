import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import MoviesList from './MoviesList';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="mainHeader">
        <Link to="/">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2 className="mainHeader__title">Movie DB</h2>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => (
  <h2>{match.params.id}</h2>
);
