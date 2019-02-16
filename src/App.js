import React, { Component } from 'react'
import Movie from './components/Movie'
import logo from './logo.svg'
import './App.css'

const movies = [
  {
    id: 1,
    title: 'Titanik',
    desc: 'ship movie'
  },
  {
    id: 2,
    title: 'Superman'
  },
  {
    id: 3,
    title: 'Batman'
  }
]

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        {movies.map(movie => {
          return <Movie movie={movie} desc={movie.desc} key={movie.id} />
        })}
      </div>
    )
  }
}

export default App
