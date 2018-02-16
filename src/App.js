import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'


import './main.scss'

const App = props => {

  return (
    <Router history={browserHistory} className="all">
      <Route path='/' component={NavBar}>
        <IndexRoute
          component={HomePage}
          addNameToJSON={handleAddName}
        />
        <Route
          path='/cardapp/designer'
          component={CardDesignPage}
          addToJSON={handleAddCard}
        />
        <Route
          path='/cardapp/yourdeck'
          component={ViewDeckPage}
        />
      </Route>
    </Router>
  )
}

export default App
