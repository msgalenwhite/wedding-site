import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'
import SubmitButton from '../components/SubmitButton'
import TextInputField from '../components/TextInputField'

const VerifyCard = (props) => {

  // cardData={this.state}
  // addToJSON={this.handleAddToJSON}
  // handleChange={this.handleValueChange}
  // editCard

  let handleEditClick = () => {
    props.editCard(props.cardData)
  }

  return(
    <div>
      <h2>Card Preview:</h2>
      <span className='cardInDeck' key="preview">
        <Card
          cardName={props.cardData.cardName}
          cardText={props.cardData.cardText}
          cardCost={props.cardData.cardCost}
          cardImageUrl={props.cardData.cardImageUrl}
          potions={props.cardData.potions}
          type={props.cardData.type}
          id="preview"
        />
      </span>
      <div>
        <h2>Add a Note</h2>
        <TextInputField
          onChange={props.handleChange}
          value={props.cardData.extraInfo}
          name="extraInfo"
          label="Add a Note:"
          key="extraInfo"
        />
      </div>
      <span className="verifyButtons">
        <h2>Add it to the Deck!</h2>
        <div onClick={props.addToJSON}>
          <Link to='/cardapp/yourdeck'>
            <SubmitButton/>
          </Link>
        </div>

        <h2>Go Back</h2>
        <div onClick={props.editCard}>
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
