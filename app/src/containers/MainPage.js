import React, {Component} from 'react'

import SignIn from './SignIn'
import RsvpForm from './RsvpForm'
import ReviewAndStoryPage from './ReviewAndStoryPage'

import invitees from '../constants/Invitees'
import passwords from '../constants/Passwords'

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",

      continueToRsvp: false,
      familyObject: {},
      dietaryRestrictions: "",

      continueToStory: false,
      stories: {
        current: "",
        saved: []
      },
      email: "",

      signInErrors: {
        generic: false,
        password: false,
        name: false
      }
    }
  this.handleTextChange = this.handleTextChange.bind(this);
  this.handlePlusOneChange = this.handlePlusOneChange.bind(this);
  this.handleStoryChange = this.handleStoryChange.bind(this);
  this.handleEditStory = this.handleEditStory.bind(this)
  this.storyInProgress = this.storyInProgress.bind(this)
  this.resetStory = this.resetStory.bind(this)

  this.isSignInComplete = this.isSignInComplete.bind(this);
  this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  this.createFamilyObject = this.createFamilyObject.bind(this)

  this.handleRSVPSubmit = this.handleRSVPSubmit.bind(this);
  this.changeRSVP = this.changeRSVP.bind(this)
  this.handleStorySubmit = this.handleStorySubmit.bind(this);
  this.handleFullSubmit = this.handleFullSubmit.bind(this)

  this.handleBoxSelect = this.handleBoxSelect.bind(this);

  this.sendEmail = this.sendEmail.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  handlePlusOneChange(event) {
    let plusOneName = event.target.value
    let plusOneAttending = this.state.familyObject["plusOne"].attending

    this.setState({
      familyObject: {
        ...this.state.familyObject,
        "plusOne": {
          name: plusOneName,
          attending: plusOneAttending
        }
      }
    })
  }

  handleStoryChange(event) {
    this.setState({
      stories: {
        ...this.state.stories,
        current: event.target.value
      }
    })
  }

  storyInProgress() {
    if (this.state.stories.current === "") {
      return false
    }
    return true;
  }

  resetStory(index) {
    let storyObject = this.state.stories
    let targetStory = storyObject.saved[index]
    storyObject.saved.splice(index, 1)
    storyObject.current = targetStory

    this.setState({
      stories: storyObject
    })
  }

  handleEditStory(index) {
    if (this.storyInProgress()) {
      /*
      ////have alert appear?
      //have div appear?
      "It looks like you are in the middle of a story.  If you continue, this story will be lost.  Do you wish to continue or return to your current story?"

        - need 2 buttons:
          - return to story
            - makes div disappear, nothing else changes
          - continue
            - see num 2
      */
    } else {
      this.resetStory(index)
    }
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
        let passwordIsCorrect = this.state.password === passwords.newRSVP

        if (nameIsCorrect && passwordIsCorrect) {

          this.createFamilyObject(familyArray);

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

  createFamilyObject(familyArray) {
    let familyObject = {}

    familyArray.forEach((person) => {
      if (person === "plusOne") {
        familyObject["plusOne"] = {
          name: "",
          attending: null
        }
      } else if (person === "baby"){
        familyObject["baby"] = true
      } else {
        familyObject[person] = null
      }
    })

    this.setState({
      familyObject: familyObject,
      continueToRsvp: true
    })
  }

  handleRSVPSubmit(event) {
    event.preventDefault();
    this.setState({
      continueToStory: true,
      continueToRsvp: false
    })
  }

  changeRSVP() {
    this.setState({
      continueToStory: false,
      continueToRsvp: true
    })
  }

  handleStorySubmit() {
    let newStory = this.state.stories.current
    let allStories = this.state.stories.saved

    if (newStory !== "") {
      allStories.push(newStory)
      this.setState({
        stories: {
          current: "",
          saved: allStories
        }
      })
    }
  }

  handleFullSubmit() {
    //this is it, folks!
    console.log("submit, full submit")
  }

  handleBoxSelect(attendee) {
    if (attendee.name === "plusOne") {
      this.setState({
        familyObject: {
          ...this.state.familyObject,
          "plusOne": {
            ...this.state.familyObject["plusOne"],
            attending: attendee.isAttending
          }
        }
      })
    } else {
      this.setState({
        familyObject: {
          ...this.state.familyObject,
          [attendee.name]: attendee.isAttending
        }
      })
    }
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
          onBoxClick={this.handleBoxSelect}
          dietaryRestrictions={this.state.dietaryRestrictions}
          onChange={this.handleTextChange}
        />
    } else if (this.state.continueToStory) {
      renderedComponent =
      <ReviewAndStoryPage
        rsvpStatus={this.state.familyObject}
        changeRSVP={this.changeRSVP}
        dietaryRestrictions={this.state.dietaryRestrictions}
        stories={this.state.stories}
        onChange={this.handleStoryChange}
        handleStorySubmit={this.handleStorySubmit}
        handleEmailChange={this.handleTextChange}
        email={this.state.email}
        handleEditStory={this.handleEditStory}
        handleFullSubmit={this.handleFullSubmit}
      />
    } else {
      renderedComponent =
        <div>
          <div>
            <a
              href='https://whitebimbo.herokuapp.com/'
            >
            <button className='button'>
              Back to Info
            </button>
            </a>
          </div>
          <div className='greeting'>
            Galen and Chris<br/>
            are Getting Married!
          </div>
          <SignIn
            handleTextChange={this.handleTextChange}
            name={this.state.name}
            password={this.state.password}
            handleSubmit={this.handleSignInSubmit}
            errors={this.state.signInErrors}
          />
        </div>
    }

    return (
      <div className='page'>
        {renderedComponent}
      </div>
    )
  }
}

export default MainPage
