import React, {Component} from 'react'

import DesignContainer from '../containers/DesignContainer'
import VerifyCard from '../containers/VerifyCard'

import ErrorMessages from '../constants/ErrorMessages'

class CardDesignPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions:'',
      genericError: "",
      submitted: false,
      // makingEdits: false,
      cardDataToPass: {}
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePotionSelect = this.handlePotionSelect.bind(this);
    this.formIsComplete = this.formIsComplete.bind(this);
    this.editCard = this.editCard.bind(this);
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
      this.handleClearForm()

      this.setState({
        cardDataToPass: formPayload,
        submitted: true
      })
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

    //change potion values to true/false so it can go through the other change function
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

  editCard(cardData) {
    this.setState({
      cardName: cardData.cardName,
      cardText: cardData.cardText,
      cardCost: cardData.cardCost,
      cardImageUrl: cardData.cardImageUrl,
      potions: cardData.potions,
      cardDataToPass: {},
      submitted: false
    })
  }

  render(){
    console.log(this.state)

    let renderedComponent;
    if (this.state.submitted) {

      renderedComponent =
        <VerifyCard
          cardData={this.state.cardDataToPass}
          addToJSON={this.props.route.addToJSON}
          editCard={this.editCard}
        />

    } else {

      renderedComponent =
        <DesignContainer
          cardData={this.state}
          handleFormSubmit={this.handleFormSubmit}
          handleValueChange={this.handleValueChange}
          handlePotionSelect={this.handlePotionSelect}
        />
    }

    return(
      <div>
        <h1>Design a Card</h1>
        {renderedComponent}
      </div>
    )
  }
}


export default CardDesignPage
