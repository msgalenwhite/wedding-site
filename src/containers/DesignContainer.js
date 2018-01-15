import React from 'react';

import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'

const DesignContainer = props => {

  //needed - a way to load the form with the old data in it.  If we pass props of cardData down, then populate the form with it - otherwise, it's blank.
  //set it in ComponentDidMount?

  return(
    <form onSubmit={props.handleFormSubmit} >
      <div className="genericError">
        {props.cardData.genericError}
      </div>
      <TextInputField
        onChange={props.handleValueChange}
        value={props.cardData.cardName}
        name='cardName'
        label='Name: '
      />
      <TextInputField
        onChange={props.handleValueChange}
        value={props.cardData.cardText}
        name='cardText'
        label='Text: '
      />
      <TextInputField
        onChange={props.handleValueChange}
        value={props.cardData.cardCost}
        name='cardCost'
        label='Cost: '
      />
      <TextInputField
        onChange={props.handleValueChange}
        value={props.cardData.cardImageUrl}
        name='cardImageUrl'
        label='Image URL: '
      />

      <p>Require Potions?</p>
      <div>
        <input
          type='radio'
          id='potionChoice1'
          name='potion'
          value='yes'
          onChange={props.handlePotionSelect}
        />
        <label htmlFor='potionChoice1'>Yes</label>
        <input
          type='radio'
          id='potionChoice2'
          name='potion'
          value='no'
          onChange={props.handlePotionSelect}
        />
        <label htmlFor='potionChoice2'>No</label>
      </div>

      <SubmitButton />
    </form>
  )

}

export default DesignContainer
