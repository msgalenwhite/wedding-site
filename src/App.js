import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'

import NavBar from './components/NavBar'

import FormContainer from './containers/FormContainer'
import HomePage from './containers/HomePage'
import DeckContainer from './containers/DeckContainer'
import VerifyCard from './containers/VerifyCard'
import WelcomePage from './containers/WelcomePage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      userName: "",
      cardData: {}
    }
    this.fetchFullDeck = this.fetchFullDeck.bind(this)
    this.addToJSON = this.addToJSON.bind(this)
    this.setUserName = this.setUserName.bind(this)
    this.setCardData = this.setCardData.bind(this)
  }
  //maybe if we passed the fetch full deck function down to the name container so it could be triggered on a successful submit?

  fetchFullDeck() {
    //this doesn't seem to be triggering at all !!!
    fetch('http://localhost:4567/api/v1/cards')
    .then(response => response.json())
    .then(body => {
      let fullDeck = body.cards

      //conditional here to return image representing empty deck if there is no deck present
      this.setState({ deck: fullDeck })
    })
  }

  setCardData(cardData) {
    this.setState({
      cardData: cardData
    })
  }

  //this is no longer being passed anywhere, which is why it isnt triggering.  I would like to have the submit a card page transfer you to verify, which would then enable tyou to add the card
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
      this.setState({
        deck: newDeck,
        cardData: {}
      })
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
    console.log(this.state)

    let handleAddCard = (formPayload) => this.addToJSON(formPayload)

    let handleNameSubmit = (name) => {
      this.setUserName(name)
    }

    let setCardData = (data) => {
      this.setCardData(data)
    }


    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute
            component={WelcomePage}
          />
          <Route
            path='/cardapp/welcome'
            component={HomePage}
            handleNameSubmit={handleNameSubmit}
          />
          <Route
            path='/cardapp/designer'
            component={FormContainer}
            setCardData={setCardData}
            cardData={this.state.cardData}
          />
          <Route
            path='/cardapp/designer/verify'
            component={VerifyCard}
            cardData={this.state.cardData}
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
