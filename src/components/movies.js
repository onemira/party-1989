import React, { Component } from 'react'
import Movie from './movie'

class OldMovies extends Component {
  render() {
    console.log(this.props)
    return (
      <main>
        {this.props.OldMovies.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              language={movie.original_language}
              overview={movie.overview}
              image={movie.poster_path}
            />
          )
        })}
      </main>
    )
  }
}

export default OldMovies
