import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    desc: PropTypes.string
  }

  static defaultProps = {
    desc: 'Description is not available'
  }

  render () {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default Movie