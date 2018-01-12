import React, { Component } from 'react';

import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions:''
    }

  this.handleValueChange = this.handleValueChange.bind(this);

  this.handleFormSubmit = this.handleFormSubmit.bind(this);

  this.handleClearForm = this.handleClearForm.bind(this);

  this.handlePotionSelect = this.handlePotionSelect.bind(this);
  }

  /*
  Note on radio buttons:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

  Good site for info

  Goal: Have user select if their card requires potions
  */

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

    this.props.route.addToJSON(formPayload);
    this.handleClearForm();
  }

  handleClearForm() {
    this.setState({
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions: ''
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

  //NOTE: on label creation - could isolate the capitalized portion of name
  render() {
    return(
      <form onSubmit={this.handleFormSubmit} >
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

        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardImageUrl}
          name='cardImageUrl'
          label='Image URL: '
        />

        <input
          className='button'
          type='submit'
          value='Submit'
        />
      </form>
    )

  }

}

export default FormContainer
