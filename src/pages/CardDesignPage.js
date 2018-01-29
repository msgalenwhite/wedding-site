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
      extraInfo: "",

      submitted: false,
      genericError: ""
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePotionSelect = this.handlePotionSelect.bind(this);
    this.formIsComplete = this.formIsComplete.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);

    this.editCard = this.editCard.bind(this);
    this.handleAddToJSON = this.handleAddToJSON.bind(this);
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
      type: this.state.type,
      extraInfo: this.state.extraInfo
    }

    if (this.formIsComplete(formPayload)) {

      this.setState({
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

    Object.entries(formPayload).forEach ((miniArray) => {
      let key = miniArray[0]
      let value = miniArray[1]

      if (key !== "extraInfo" && value === "") {
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
      genericError: '',
      submitted: false,
      extraInfo: ""
    })
  }

  handlePotionSelect(event) {
    //NEXT - clear this up so the saved data matches what the event uses

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
    //NEXT - clear this up so the saved data matches what the event uses
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

  handleAddToJSON(){
    let formPayload = {
      cardName: this.state.cardName,
      cardText: this.state.cardText,
      cardCost: this.state.cardCost,
      cardImageUrl: this.state.cardImageUrl,
      potions: this.state.potions,
      type: this.state.type,
      extraInfo: ''
    }

    this.handleClearForm()
    this.props.route.addToJSON(formPayload)
  }

  editCard() {
    this.setState({
      submitted: false
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
      <span className="verifyCard">
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
    } else if (this.state.submitted === false) {
      previewCard =
      <img
        className="spaceFillerPic"
        src="https://i.imgur.com/i110dBO.png"
        alt="space-filler picture"
      />
    }

    //when the user has submitted a card, show the Verify page rather than the form
    let renderedComponent;
    if (this.state.submitted) {
      renderedComponent =
      <VerifyCard
        cardData={this.state}
        addToJSON={this.handleAddToJSON}
        handleChange={this.handleValueChange}
        editCard={this.editCard}
      />
    } else {
      renderedComponent =
      <DesignContainer
        className="designForm"
        cardData={this.state}
        handleFormSubmit={this.handleFormSubmit}
        handleValueChange={this.handleValueChange}
        handlePotionSelect={this.handlePotionSelect}
        handleDropDownClick={this.handleDropDownClick}
      />
    }

    return(
      <div className='page'>
        <h1 className="pageTitle">Design a Card</h1>
        {previewCard}
        {renderedComponent}
      </div>
    )
  }
}


export default CardDesignPage
