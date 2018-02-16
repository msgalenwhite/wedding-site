import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'

import './main.scss'

import NavBar from './containers/NavBar'
import MainPage from './containers/MainPage'

const App = props => {

  return (
    <Router history={browserHistory} className="all">
      <Route path='/' component={NavBar}>
        <IndexRoute
          component={MainPage}
        />
      </Route>
    </Router>
  )
}

export default App
