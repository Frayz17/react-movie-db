import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import MoviesList from './MoviesList'
import MovieDetail from './components/MovieDetail'
import './App.css'

const App = () => (
  <Router>
    <div className='App'>
      <header className='mainHeader'>
        <Link to='/'>
          <h2 className='mainHeader__title'>Movie DB</h2>
        </Link>
      </header>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route path='/:id' component={MovieDetail} />
      </Switch>
    </div>
  </Router>
)

export default App
