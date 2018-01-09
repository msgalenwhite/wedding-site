import React, { Component } from 'react'
import { Router } from 'react-router'

import FormContainer from './containers/FormContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: []
    }

    this.addToJSON = this.addToJSON.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:4567/api/v1/cards')
    .then(response => response.json())
    .then(body => {
      let fullDeck = body.cards
      this.setState({ deck: fullDeck })
    })
  }

  addToJSON(formPayload){
    //something is wrong here:

    /*

App.js?a673:35 POST http://localhost:4567/api/v1/cards 500 (Internal Server Error)

localhost/:1 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0

    */

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
      console.log(body)
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
      <FormContainer
        addToJSON={handleAddCard}
      />
    )
  }
}

export default App
