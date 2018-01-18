import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'
import SubmitButton from '../components/SubmitButton'

const VerifyCard = (props) => {
  let onClickFunc = () => {
    props.addToJSON(props.cardData)
  }
  
  return(
    <div>
      <h2>Card Preview:</h2>
      <Card
        cardName={props.cardData.cardName}
        cardText={props.cardData.cardText}
        cardCost={props.cardData.cardCost}
        cardImageUrl={props.cardData.cardImageUrl}
        potions={props.cardData.potions}
        id={props.cardData.id}
      />

      <h2>Looks Good?</h2>
      <div onClick={onClickFunc}>

        <Link
          to='/cardapp/yourdeck'
        >
          <SubmitButton
          />
        </Link>
      </div>
    </div>
  )
}


export default VerifyCard
