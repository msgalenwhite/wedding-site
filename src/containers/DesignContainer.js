import React from 'react';

import DropDown from '../components/DropDown'
import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'
import UpAndDown from '../components/UpAndDown'

import CardImages from '../constants/CardImages'

const DesignContainer = props => {

  let labelObject = {
    cardName: "Name:",
    cardText: "Text:",
    cardCost: "Cost:",
    cardImageUrl: "Image URL:",
    type: "What type of card would you like?"
  }

  let textInputs = Object.entries(labelObject).map((miniArray) => {
    let fieldName = miniArray[0]
    let fieldLabel = miniArray[1]
    let fieldValue = props.cardData[fieldName]

    if (fieldName !== "type") {
      return (
        <TextInputField
          onChange={props.handleValueChange}
          value={fieldValue}
          name={fieldName}
          label={fieldLabel}
          key={fieldLabel}
        />
      )
    }
  })

  let typeOptions = Object.values(CardImages).map((valueObject) => {
    return valueObject.label
  })


  return(
    <form
      className="designForm"
      onSubmit={props.handleFormSubmit}
    >
      <div className="genericError">
        {props.cardData.genericError}
      </div>
      <DropDown
        className="typeDropDown"
        label={labelObject.type}
        options={typeOptions}
        handleClick={props.handleDropDownClick}
      />

      {textInputs}

      <div className="potionsSelection">
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
      </div>
      <SubmitButton />
    </form>
  )

}

export default DesignContainer
