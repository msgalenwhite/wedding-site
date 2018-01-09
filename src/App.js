import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import FormContainer from './containers/FormContainer'
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      firstName: "",
      lastName: "",
      title: ""
    }

    this.addToJSON = this.addToJSON.bind(this)

    this.fetchFullDeck = this.fetchFullDeck.bind(this)
  }

  fetchFullDeck() {
    fetch('http://localhost:4567/api/v1/cards')
    .then(response => response.json())
    .then(body => {
      let fullDeck = body.cards
      this.setState({ deck: fullDeck })
    })
  }

  addToJSON(formPayload){

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
      let newDeck = this.state.deck.concat(body)
      this.setState({ deck: newDeck })
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  render() {
    let handleAddCard = (formPayload) => this.addToJSON(formPayload)


    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute
            component={HomePage}
          />
          <Route
            path='/cardapp/designer'
            component={FormContainer}
            addToJSON={handleAddCard}
          />
        </Route>
      </Router>
    )
  }
}

export default App
