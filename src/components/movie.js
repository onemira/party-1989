import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <section className="contents">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
            this.props.image
          }`}
          alt="poster"
        />
        <section className="details">
          <h1 className="title">{this.props.title}</h1>
          {this.props.language === 'en' ? (
            <h3> Language: English </h3>
          ) : (
            <h3> Language: Japanese </h3>
          )}
          <h3>Overview: {this.props.overview}</h3>
        </section>
      </section>
    )
  }
}

export default Movie
