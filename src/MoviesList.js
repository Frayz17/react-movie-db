import React, { Component } from 'react'
import Movie from './components/Movie'

class MoviesList extends Component {
  state = {
    movies: []
  }

  async componentDidMount () {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bf071843832238b122dcbb33c2a416b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await res.json()

      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { movies } = this.state

    return (
      <div>
        {movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    )
  }
}

export default MoviesList
