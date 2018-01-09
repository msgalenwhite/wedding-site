import React, { Component } from 'react';

import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardName: "",
      cardText: "",
      cardCost: "",
      cardImageUrl: ""
    }

  this.handleValueChange = this.handleValueChange.bind(this);

  this.handleFormSubmit = this.handleFormSubmit.bind(this);

  this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleValueChange(event) {
    let newValue = event.target.value;
    let key = event.target.className;

    this.setState({
      [key]: newValue
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let formPayload = {
      cardName: this.state.cardName,
      cardText: this.state.cardText,
      cardCost: this.state.cardCost,
      cardImageUrl: this.state.cardImageUrl
    }
    this.props.addToJSON(formPayload);
    this.handleClearForm();
  }

  handleClearForm() {
    this.setState({
      cardName: "",
      cardText: "",
      cardCost: "",
      cardImageUrl: ""
    })
  }

  //NOTE: on label creation - could isolate the capitalized portion of name
  render() {
    return(
      <form onSubmit={this.handleFormSubmit} >
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardName}
          name="cardName"
          label="Name: "
        />
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardText}
          name="cardText"
          label="Text: "
        />
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardCost}
          name="cardCost"
          label="Cost: "
        />
        <TextInputField
          onChange={this.handleValueChange}
          value={this.state.cardImageUrl}
          name="cardImageUrl"
          label="Image URL: "
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
