import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'
import SubmitButton from '../components/SubmitButton'

const VerifyCard = (props) => {
  let onClickFunc = () => {
    props.addToJSON(props.cardData)
  }

  let handleEditClick = () => {
    props.editCard(props.cardData)
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

      <span>
      <h2>Looks Good?</h2>
      <div onClick={onClickFunc}>

        <Link to='/cardapp/yourdeck'>
          <SubmitButton/>
        </Link>
      </div>

      <h2>Go Back</h2>
      <div onClick={handleEditClick}>
        <input
          type="button"
          value="Make a Change"
        />
      </div>
      </span>

    </div>
  )
}


export default VerifyCard
