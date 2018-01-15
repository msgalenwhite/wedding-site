import React, {Component} from 'react'

import NameContainer from './NameContainer'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      genericError: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let target = event.target.className;

    let fullPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title
    }

    this.setState({
      [target]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    let formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title
    }

    if (this.formIsComplete(formPayload)) {
      let userName = this.formatName(formPayload);
      this.props.route.handleNameSubmit(userName);
    } else {
      this.setState({
        genericError: "Please enter your name."
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

  formatName(formPayload) {
    let capitalizedValues = Object.values(formPayload).map((value) => {
      return (
        this.capitalize(value)
      )
    })

    let userName = `${capitalizedValues[2]} ${capitalizedValues[0]} ${capitalizedValues[1]}`

    return userName
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleTitleClick(chosenTitle) {
    this.setState({ title: chosenTitle })
  }

  ComponentWillMount(){
    this.props.route.fetchFullDeck()
  }

  render() {
    console.log(this.state)

    return(
      <div>
        <h1>Welcome to the Card Designer!</h1>
        <NameContainer
          error={this.state.genericError}
          handleTitleClick={this.handleTitleClick}
          handleChange={this.handleChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }

}

export default HomePage
