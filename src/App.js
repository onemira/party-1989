import React, { Component } from 'react'
import Movies from './components/movies'
import data from './data/data.json'

class App extends Component {
  render() {
    return <Movies OldMovies={data.results} />
  }
}

export default App
