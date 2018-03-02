import React from 'react'

import RsvpEntry from '../components/RsvpEntry'
import TextInputField from '../components/TextInputField'

import invitationWording from '../constants/Invitation'
const RsvpForm = props => {

  let plusOneParagraph;
  if (Object.keys(props.familyObject).includes("plusOne")) {
    plusOneParagraph =
      <div>
        <p>
          You are welcome to bring someone with you as your Plus One.  If you know the name of the person who will be joining you, please let us know so we can best organize their seating arrangement for dinner.
        </p>
        <p>
          If you have decided that you would prefer to celebrate with Galen and Chris without an additional member in your party, please leave the name field blank and select 'Will Not Attend' beneath their section.
        </p>
      </div>
  }

  let babyParagraph;
  if (Object.keys(props.familyObject).includes("baby")) {
    babyParagraph =
    <p>
    You are welcome to bring your child, but please let the hotel know if you require any additional sleeping accomodations.  There will not be childcare available.
    </p>
  }

  let entries = Object.keys(props.familyObject).map((familyMember) => {
    let returnedComponent;
    let attending;

    let attendingBoxClick = () => {
      props.onBoxClick({
        name: familyMember,
        isAttending: true
      })
    }
    let notAttendingBoxClick = () => {
      props.onBoxClick({
        name: familyMember,
        isAttending: false
      })
    }

    if (familyMember === "plusOne") {

      if (props.familyObject["plusOne"].attending) {
        attending = true
      } else {
        attending = false
      }

      returnedComponent =
        <div key="RSVPlusOne">
          <RsvpEntry
            name="Plus One"
            yesClick={attendingBoxClick}
            noClick={notAttendingBoxClick}
            attending={attending}
          />
          <TextInputField
            name="plusOne"
            label="Name: "
            value={props.familyObject["plusOne"].name}
            onChange={props.handlePlusOneChange}
          />
        </div>
    } else if (familyMember !== "baby"){

      if (props.familyObject[familyMember] === true) {
        attending = true
      } else {
        attending = false
      }

      returnedComponent =
      <RsvpEntry
        key={`RSVP-${familyMember}`}
        name={familyMember}
        yesClick={attendingBoxClick}
        noClick={notAttendingBoxClick}
        attending={attending}
      />
    }

    return returnedComponent
  })

  let dietaryText = "Do you or anyone in your party have dietary restrictions?  Please let us know and we will do our best to accomodate you."

  return(
    <div>
      {invitationWording.invitation}
      <br/>
      <br/>
      {invitationWording.reception}
      <br/>
      {babyParagraph}
      {plusOneParagraph}

      <form onSubmit={props.handleSubmit}>
        {entries}

        <br/>
        <div className="dietarydiv">
          <p>
            {dietaryText}
          </p>
          <textarea
            value={props.dietaryRestrictions}
            onChange={props.onChange}
            className="dietaryRestrictions"
          >
          </textarea>
        </div>
        <input
          type='submit'
          className='button'
          value='Next'
        />
      </form>
    </div>
  )
}

export default RsvpForm
