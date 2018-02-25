import React from 'react'

import RsvpEntry from './RsvpEntry'
import TextInputField from '../components/TextInputField'

const RsvpForm = props => {

  let plusOneParagraph;
  let babyParagraph;

  if (Object.keys(props.familyObject).includes("plusOne")) {
    plusOneParagraph =
      <div>
        <p>
          Please include the name of your Plus One.  This will help us organize their seating arrangement for dinner.  If you do not know the identity of your Plus One (yet!) but would still like to bring someone, please enter 'n/a' in the name field.
        </p>
        <p>
          If you have decided that you would prefer to enjoy this wonderful occasion without an additional member in your party, please leave their name blank and select 'Will Not Attend' beneath their section.
        </p>
      </div>
  }

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
          <TextInputField
            name="plusOne"
            label="Plus One: "
            value={props.familyObject["plusOne"].name}
            onChange={props.handlePlusOneChange}
          />
          <RsvpEntry
            name=""
            yesClick={attendingBoxClick}
            noClick={notAttendingBoxClick}
            attending={attending}
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

  return(
    <div>
      <h3 className='title'>
        Will we be seeing you in Gloucester, MA on October 13, 2018?
      </h3>
      {babyParagraph}
      {plusOneParagraph}

      <form onSubmit={props.handleSubmit}>
        {entries}
        <input
          type='submit'
          className='button'
        />
      </form>
    </div>
  )
}

export default RsvpForm
