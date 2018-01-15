import React from 'react'

import Card from '../components/Card'

const VerifyCard = (props) => {

  return(
    <div>
      <h3>Is this the card you wanted?</h3>
      <Card
        cardName={props.cardName}
        cardText={props.cardText}
        cardCost={props.cardText}
        cardImageUrl={props.cardImageUrl}
        potions={props.potions}
        id={props.id}
      />
    </div>
  )
}


export default VerifyCard
