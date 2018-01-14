import React, {Component} from 'react'

import NameContainer from './NameContainer'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatName = this.formatName.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.somethingIsEmpty = this.somethingIsEmpty.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let target = event.target.className;

    this.setState({
      [target]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    //need to validate that all sections have been completed

    let userName = this.formatName();

    this.props.route.handleNameSubmit(userName);
  }

  formatName() {
    let title = this.state.title
    let firstName = this.capitalize(this.state.firstName)
    let lastName = this.capitalize(this.state.lastName)

    let userName = `${title} ${firstName} ${lastName}`

    return userName
  }

  capitalize(string) {
    let capital = string[0].toUpperCase()
    let newString = string.slice(1,string.length-1)

    return `${capital}${newString}`
  }

  handleTitleClick(chosenTitle) {
    this.setState({ title: chosenTitle })
  }

  somethingIsEmpty(){
    Object.entries(this.state).forEach((miniArray) => {
      let targetKey = miniArray[0]
      let targetValue = miniArray[1]

      if (targetKey !== "errors"){
        if (targetValue === ""){
          return true;
        }
      }
    })
    return false;
  }

  render() {
    return(
      <div>
        <h1>Welcome to the Card Designer!</h1>
        <NameContainer
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
