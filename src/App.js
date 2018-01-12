import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import NavBar from './components/NavBar'

import FormContainer from './containers/FormContainer'
import HomePage from './containers/HomePage'
import DeckContainer from './containers/DeckContainer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      userName: ""
    }
    this.fetchFullDeck = this.fetchFullDeck.bind(this)

    this.addToJSON = this.addToJSON.bind(this)

    this.setUserName = this.setUserName.bind(this)
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
    console.log(formPayload)
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

  setUserName (name) {
    this.setState({
      userName: name
    })
  }

  render() {

    let handleAddCard = (formPayload) => this.addToJSON(formPayload)

    let handleNameSubmit = (name) => {
      this.setUserName(name)
    }


    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute
            component={HomePage}
            handleNameSubmit={handleNameSubmit}
          />
          <Route
            path='/cardapp/designer'
            component={FormContainer}
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
}

export default App
