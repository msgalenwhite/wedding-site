import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'

import NavBar from './components/NavBar'

import CardDesignPage from './containers/CardDesignPage'
import HomePage from './containers/HomePage'
import DeckContainer from './containers/DeckContainer'

const App = props => {

  let addToJSON = (formPayload) => {
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
    .then(body => {
      // let newDeck = this.state.deck.concat(body)
      // this.setState({
      //   deck: newDeck,
      //   cardData: {}
      // })
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  let handleAddCard = (formPayload) => addToJSON(formPayload)

  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute
          component={HomePage}
        />
        <Route
          path='/cardapp/designer'
          component={CardDesignPage}
          addToJSON={handleAddCard}
        />
        <Route
          path='/cardapp/yourdeck'
          component={DeckContainer}
        />
      </Route>
    </Router>
  )
}

export default App
