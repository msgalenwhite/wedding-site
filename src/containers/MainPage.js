import React, {Component} from 'react'

import SignIn from './SignIn'
import RsvpForm from './RsvpForm'

import invitees from '../constants/Invitees'

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",

      continueToRsvp: false,
      familyObject: {},

      rsvpResponse: "",
      dietaryRestriction: "",

      signInErrors: {
        generic: false,
        password: false,
        name: false
      }
    }
  this.handleTextChange = this.handleTextChange.bind(this);
  this.handlePlusOneChange = this.handlePlusOneChange.bind(this);

  this.isSignInComplete = this.isSignInComplete.bind(this);
  this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  this.handleRSVPSubmit = this.handleRSVPSubmit.bind(this)

  this.sendEmail = this.sendEmail.bind(this);
  }

  handleTextChange (event) {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  handlePlusOneChange (event) {
    this.setState({
      familyObject: {
        ...this.state.familyObject,
        "plusOne": {
          name: event.target.value,
          attending: null
        }
      }

    })
  }

  isSignInComplete () {
    if (this.state.name === "" || this.state.password === "") {
      return false;
    }
    return true;
  }

  handleSignInSubmit (event) {
    event.preventDefault();

    if (this.isSignInComplete()) {

      invitees.forEach((familyArray) => {

        let nameIsCorrect = familyArray.includes(this.state.name);
        let passwordIsCorrect = this.state.password === "galenandchriswedding"

        if (nameIsCorrect && passwordIsCorrect) {
          let formPayload = {}

          familyArray.forEach((familyMember) => {

            if (familyMember === "plusOne") {
              formPayload["plusOne"] = {
                name: "",
                attending: null
              }
            } else {
              formPayload[familyMember] = null
            }
          })

          this.setState({
            familyObject: formPayload,
            continueToRsvp: true
          })
        } else if (nameIsCorrect) {
          this.setState({
            signInErrors: {
              ...this.state.signInErrors,
              password: true
            }
          })
        }
      })
    } else {
      this.setState({
        signInErrors: {
          ...this.state.signInErrors,
          generic: true
        }
      })
    }

    //if we have not hit anything above, that means that the NAME is wrong

  }

  handleRSVPSubmit() {
    event.preventDefault();

    console.log("An RSVP was submitted")
    console.log(this.state.familyObject)
  }

  sendEmail(formPayload) {
    //BEFORE THIS WILL WORK, jump through SENDGRID's hoops!

    fetch('/testemail', {
      body: JSON.stringify(formPayload),
      method: 'POST'
    })
      .then ( response => {
        if ( response.ok ) {
          console.log(response)
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  render() {
    let renderedComponent;

    if (this.state.continueToRsvp) {
      renderedComponent =
        <RsvpForm
          familyObject={this.state.familyObject}
          handlePlusOneChange={this.handlePlusOneChange}
          handleSubmit={this.handleRSVPSubmit}
        />
    } else {
      renderedComponent =
        <SignIn
          handleTextChange={this.handleTextChange}
          name={this.state.name}
          password={this.state.password}
          email={this.state.email}
          handleSubmit={this.handleSignInSubmit}
          errors={this.state.signInErrors}
        />
    }

    return (
      <div className='page'>
        <div className='heading'>
          Galen and Chris<br/>
          are Getting Married!
        </div>
        {renderedComponent}
      </div>
    )
  }
}

export default MainPage
