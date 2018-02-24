import React from 'react'

import RsvpEntry from './RsvpEntry'
import TextInputField from '../components/TextInputField'

const RsvpForm = props => {

  //shouldn't I be able to get the name of their Plus One to appear on the RSVP entry while they type it in?
  let plusOnePresent = Object.keys(props.familyObject).includes("plusOne")
  let plusOneParagraph;

  if (plusOnePresent) {
    plusOneParagraph =
      <div>
        <p>
          Please include the name of your Plus One.  This will help us organize their seating arrangement for dinner.
        </p>
        <p>
          If you have decided that you would prefer to enjoy this wonderful occasion without an additional member in your party, please leave their name blank and select "Will Not Attend" beneath their section.
        </p>
      </div>
  }

  let entries = Object.keys(props.familyObject).map((familyMember) => {
    let returnedComponent;

    if (familyMember === "plusOne") {
      returnedComponent =
        <div key="RSVPlusOne">
          <TextInputField
            name="plusOne"
            label="Name of your Plus One: "
            value={props.familyObject["plusOne"].name}
            onChange={props.handlePlusOneChange}
          />
          <RsvpEntry
            name={familyMember.name}
          />
        </div>
    } else {
      returnedComponent =
      <RsvpEntry
        key={`RSVP-${familyMember}`}
        name={familyMember}
      />
    }

    return returnedComponent
  })

  return(
    <div>
      <h3 className='title'>
        Will we be seeing you in Gloucester, MA on October 13, 2018?
      </h3>
      {plusOneParagraph}

      <form>
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
