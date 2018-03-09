import React, { Component } from 'react'
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import './main.scss'

import MainPage from './containers/MainPage'

const App = props => {
  return(

    <Router history={browserHistory}>
      <Route
        path='/'
        component={MainPage}
      />
    </Router>
  )
}

export default App
