import React, {Component} from 'react'

import SignIn from './SignIn'

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",
      rsvpResponse: "",
      dinnerResponse: "",
      dietaryRestriction: "",

      signInComplete: false,
      //error message here

      signInErrors: {
        generic: false,
        password: false,
        name: false
      }
    }
  this.handleTextChange = this.handleTextChange.bind(this);

  this.isSignInComplete = this.isSignInComplete.bind(this)
  this.handleSignInSubmit = this.handleSignInSubmit.bind(this);

  this.sendEmail = this.sendEmail.bind(this)
  }

  handleTextChange (event) {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  isSignInComplete () {
    //check if both fields are filled out.  If not, put an error - "Please complete all fields."

    if (this.state.name === "" || this.state.password === "") {
      this.setState({
        signInErrors: {
          ...this.state.signInErrors,
          generic: true
        }
      })
    } else if (this.state.signInErrors.generic) {
    //if both fields are filled in, but there is currently an error, get rid of the genericError

      this.setState({
        signInErrors: {
          signInErrors: {
            ...this.state.signInErrors,
            generic: false
          }
        }
      })
    }
  }

  handleSignInSubmit (event) {
    event.preventDefault();

    //are both name and password filled in?
    this.isSignInComplete();

    //check if the name is on our list.  If not, suggest a fuzzy possibility - `I was unable to find ${userSubmission}. Did you mean ${fuzzy guess}?`
    // -- right now in Errors this is 'Your name/your password are incorrect.  Please enter your name and the correct password to continue.'



    //If the name is correct, check the password.  If wrong, ask for the correct password - 'Please enter the correct password.'

    //if name and password are correct, change this.state.signInComplete to true

  }

  sendEmail(formPayload) {
    fetch('/testemail')
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        console.log(response)
        //right now we are just console logging, not doing anything else

        //TEST NEEDED: are we sending an email from this fetch?  does the email contain the correct info?

      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  render() {
    let renderedComponent;

    if (!this.state.signInComplete) {
      renderedComponent =
        <SignIn
          handleTextChange={this.handleTextChange}
          name={this.state.name}
          password={this.state.password}
          rsvpResponse={this.state.rsvpResponse}
          dinnerResponse={this.state.dinnerResponse}
          dietaryRestriction={this.state.dietaryRestriction}
          handleSubmit={this.handleSignInSubmit}
          errors={this.state.signInErrors}
        />
    }

    return (
      <div className='page'>
        <div className='title'>
          Galen and Chris<br/>
          are Getting Married!
        </div>
        {renderedComponent}
      </div>
    )
  }
}

export default MainPage
