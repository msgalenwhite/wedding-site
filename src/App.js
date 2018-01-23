import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'

import NavBar from './components/NavBar'

import CardDesignPage from './pages/CardDesignPage'
import HomePage from './pages/HomePage'
import ViewDeckPage from './pages/ViewDeckPage'

import './main.scss'

const App = props => {

  let addCardToJSON = (formPayload) => {
    fetch("/api/v1/cards", {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw (error);
      }
    })
    .then(response => {
      return response.json()
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  let addNameToJSON = (userName) => {
    fetch("/api/v1/userName", {
      method: 'POST',
      body: JSON.stringify(userName)
    })
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw (error);
      }
    })
    .then(response => {
      return response.json()
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  let clearName = () => {
    fetch("/api/v1/eraseUserName", {
      method: 'POST',
      body: JSON.stringify(userName)
    })
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw (error);
      }
    })
    .then(response => {
      return response.json()
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  let handleAddCard = (formPayload) => addCardToJSON(formPayload)

  let handleAddName = (userName) =>
  addNameToJSON(userName)

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
