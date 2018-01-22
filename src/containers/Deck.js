import React from 'react'

import Card from '../components/Card'

const Deck = props => {

  let displayDeck = props.cardData.map((indivCard) => {
    return (
      <span className='cardInDeck' key={indivCard.id}>
        <Card
          cardName={indivCard.cardName}
          cardText={indivCard.cardText}
          cardCost={indivCard.cardCost}
          cardImageUrl={indivCard.cardImageUrl}
          potions={indivCard.potions}
          id={indivCard.id}
        />
      </span>
    )
  })
  return(
    <div className='deck'>
      {displayDeck}
    </div>
  )
}

export default Deck
