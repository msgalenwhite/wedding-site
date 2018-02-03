import React, {Component} from 'react'

import Deck from '../containers/Deck'

class ViewDeckPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/cards')
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
    .then(response => {
      this.setState({
        deck: response.cards
      })
    })
    .catch (error => {
      console.log(`Error in fetch: ${error.message}`);
    })
  }

  render() {

    return(
      <div className='page deckPage'>
        <h3 className='pageTitle'>Your Current Deck</h3>
        <div className='deckPageDiv'>
          <Deck
            cardData={this.state.deck}
          />
        </div>
      </div>
    )
  }
}

export default ViewDeckPage
