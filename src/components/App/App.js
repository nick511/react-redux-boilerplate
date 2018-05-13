import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
