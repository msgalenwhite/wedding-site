import React, {Component} from 'react'

import Card from '../components/Card'

class ViewDeckPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4567/api/v1/cards')
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
    let displayDeck = this.state.deck.map((indivCard) => {
      return (
        <div key={indivCard.id} className="small-6 medium-6 large-8 columns">
          <Card
            cardName={indivCard.cardName}
            cardText={indivCard.cardText}
            cardCost={indivCard.cardCost}
            cardImageUrl={indivCard.cardImageUrl}
            potions={indivCard.potions}
            id={indivCard.id}
          />
        </div>
      )
    })

    return(
       <div className='page'>
        <h3 className="pageTitle">Your Current Deck</h3>
        <div className="row">
          {displayDeck}
        </div>
      </div>
    )
  }
}


export default ViewDeckPage
