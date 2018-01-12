import React, {Component} from 'react'

import NameContainer from './NameContainer'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: ""
    }
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleTitleClick = this.handleTitleClick.bind(this);

    this.formatName = this.formatName.bind(this);
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

    let userName = this.formatName();

    this.props.route.handleNameSubmit(userName);


    //we want to use props.onSubmit to send the name to app
  }

  formatName() {
    let title = this.state.title
    let fullName = `${this.state.firstName} ${this.state.lastName}`
    let userName = `${title} ${fullName}`

    return userName
  }

  handleTitleClick(chosenTitle) {
    this.setState({ title: chosenTitle })
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
