import React, {Component} from 'react'

import DesignContainer from '../containers/DesignContainer'
import VerifyCard from '../containers/VerifyCard'

import ErrorMessages from '../constants/ErrorMessages'
import CardImages from '../constants/CardImages'

import Card from '../components/Card'

class CardDesignPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardText: '',
      cardCost: '',
      cardImageUrl: '',
      potions:'',
      type: '',
      genericError: ""
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePotionSelect = this.handlePotionSelect.bind(this);
    this.formIsComplete = this.formIsComplete.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
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
      potions: this.state.potions,
      type: this.state.type
    }

    if (this.formIsComplete(formPayload)) {
      this.handleClearForm()
      this.props.route.addToJSON(formPayload)
      alert("Your card has been submitted!")

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
      type: '',
      genericError: ''
    })
  }

  handlePotionSelect(event) {

    let booleanPotions;
    if (event.target.value === "yes"){
      booleanPotions = true;
    } else if (event.target.value === "no") {
      booleanPotions = false;
    }

    this.setState({
      potions: booleanPotions
    })
  }

  handleDropDownClick(result) {
    let wantedValue;

    Object.entries(CardImages).forEach ((miniArray) => {
      let possibleWantedValue = miniArray[0]
      let possibleResultMatch = miniArray[1].label

      if (possibleResultMatch === result) {
        wantedValue = possibleWantedValue
      }
    })

    this.setState({
      type: wantedValue
    })
  }

  render(){
    console.log(this.state)

    let previewCard;
    let image;

    //if they haven't chosen an image yet, use a test image.
    if (this.state.cardImageUrl === ""){
      image = "https://i.imgur.com/i110dBO.png"
    } else {
      image = this.state.cardImageUrl
    }

    //if they haven't chosen a type yet, we can't show any card
    if (this.state.type !== "") {
      previewCard =
      <span className="spaceFillerPic">
        <Card
          cardName={this.state.cardName}
          cardText={this.state.cardText}
          cardCost={this.state.cardCost}
          cardImageUrl={image}
          potions={this.state.potions}
          type={this.state.type}
          id={this.state.id}
        />
      </span>
    } else {
      previewCard =
      <img
        className="spaceFillerPic"
        src="https://i.imgur.com/i110dBO.png"
        alt="space-filler picture"
      />
    }

    return(
      <div className='page'>
        <h1 className="pageTitle">Design a Card</h1>
        {previewCard}
        <DesignContainer
          className="designForm"
          cardData={this.state}
          handleFormSubmit={this.handleFormSubmit}
          handleValueChange={this.handleValueChange}
          handlePotionSelect={this.handlePotionSelect}
          handleDropDownClick={this.handleDropDownClick}
        />
      </div>
    )
  }
}


export default CardDesignPage
