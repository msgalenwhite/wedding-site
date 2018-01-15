import React, { Component } from 'react';
import { Redirect, Link } from 'react-router';
//https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link

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
    this.formIsComplete = this.formIsComplete.bind(this);
    this.fullFormSubmit = this.fullFormSubmit.bind(this);
  }

  //needed - a way to load the form with the old data in it.  If we pass props of cardData down, then populate the form with it - otherwise, it's blank.
  //set it in ComponentDidMount?

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
        //this is where I could set a more specific error
      }
    })
    return formIsFull
  }

  fullFormSubmit(formPayload) {
    //send the formpayload to app to save it
    this.props.route.setCardData(formPayload);

    //clear the form
    this.handleClearForm()
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

  render() {

    // let redirectHandleSubmit = () => {
    //   this.props.route.addToJSON(formPayload);
    //   this.handleClearForm();
    // }

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
