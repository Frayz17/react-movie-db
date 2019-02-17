import React, { Component } from 'react'
import Movie from './components/Movie'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch()
      const movies = await res.json()
      
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        {this.state.movies.map(movie => {
          return <Movie movie={movie} key={movie.id} />
        })}
      </div>
    )
  }
}

export default App
