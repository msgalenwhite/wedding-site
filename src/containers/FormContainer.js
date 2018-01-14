import React, { Component } from 'react';

import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'
import ErrorMessages from '../constants/ErrorMessages'


class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions:'',
      genericError: ""
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePotionSelect = this.handlePotionSelect.bind(this);
  }

  handleValueChange(event) {
    let newValue = event.target.value;
    let target = event.target.className;

    this.setState({
      [target]: newValue
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let formPayload = {
      cardName: this.state.cardName,
      cardText: this.state.cardText,
      cardCost: this.state.cardCost,
      cardImageUrl: this.state.cardImageUrl,
      potions: this.state.potions
    }

    if (this.formIsComplete(formPayload)) {
      this.fullFormSubmit(formPayload)
    } else {
      this.setState({
        genericError: ErrorMessages.generic
      })
    }
  }

  formIsComplete(formPayload) {
    let formIsFull = true;
    Object.values(formPayload).forEach ((userInputField) => {
      if (userInputField === "") {
        formIsFull = false;

      }
    })
    return formIsFull
  }

  fullFormSubmit(formPayload) {
    this.props.route.addToJSON(formPayload);
    this.handleClearForm();
  }

  handleClearForm() {
    this.setState({
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions: '',
      genericError: ''
    })
  }

  handlePotionSelect(event) {
    let booleanPotions;
    if (event.target.value === "yes"){
      booleanPotions = true;
    } else {
      booleanPotions = false;
    }

    this.setState({
      potions: booleanPotions
    })
  }

  // validateInput(name){
  //   let valueToCheck;
  //   let copyOfState = this.state
  //
  //   Object.entries(copyOfState).forEach((miniArray) => {
  //     let targetName = miniArray[0]
  //     let targetValue = miniArray[1]
  //
  //     if (targetName === name) {
  //       if (targetValue === ""){
  //         this.writeErrors(targetName)
  //       }
  //     }
  //   })
  // }

  // writeErrors(name){
  //   let currentErrors = this.state.errors
  //
  //   currentErrors.name = ErrorMessages.name
  //
  //   this.setState({
  //     errors: currentErrors
  //   })
  // }

  // foundNoErrors() {
  //   Object.entries(this.state).forEach ((miniArray) => {
  //     let targetKey = miniArray[0]
  //     let targetValue = miniArray[1]
  //
  //     if (targetKey !== "errors") {
  //       if (targetValue !== "") {
  //         return false
  //       }
  //     }
  //   })
  //   return true;
  // }


  render() {
    console.log(this.state)
    //Challenge: How could I access these values inside of a map function?

    return(
      <form onSubmit={this.handleFormSubmit} >
        <div className="genericError">
          {this.state.genericError}
        </div>
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardName}
          name='cardName'
          label='Name: '
        />
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardText}
          name='cardText'
          label='Text: '
        />
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardCost}
          name='cardCost'
          label='Cost: '
        />

        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardImageUrl}
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
            onChange={this.handlePotionSelect}
          />
          <label htmlFor='potionChoice1'>Yes</label>
          <input
            type='radio'
            id='potionChoice2'
            name='potion'
            value='no'
            onChange={this.handlePotionSelect}
          />
          <label htmlFor='potionChoice2'>No</label>
        </div>

        <SubmitButton />
      </form>
    )
  }
}

export default FormContainer
