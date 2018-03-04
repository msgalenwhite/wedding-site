import React from 'react'

const RsvpSummary = props => {
  let makeListOfNames = (heading, array) => {
    let list;

    if (array.length > 0) {
      list = array.map((name) => {
        return( <span key={name}>{name}<br/></span>)
      })
    } else {
      list = <span key='n/a'>n/a</span>
    }

    return(
      <div className='center'>
        <h3 className='title'>{heading}</h3>
        {list}
      </div>
    )
  }

  let introPara =
    <div className="rsvpInfo">
      <h3 className="heading">RSVP Details</h3>
      <p>Your information will NOT be submitted until you enter an email (so we can send you a copy of your RSVP) and press submit at the bottom of this page.</p>
      <p>If you would like to make a change before submitting, do NOT use the back button in your browser.  Instead, select "Change my RSVP" below.</p>
      <p>We completely understand that plans can change - if you need to make a change to your RSVP after submitting it, please come back to the website.  The deadline for submitting changes is: ####.  If something occurs after that date, please contact Galen or Chris via phone/email/Facebook and let them know.</p>
    </div>

  let willAttend = []
  let willNotAttend = []

  Object.entries(props.rsvpStatus).forEach((miniArray) => {
    let inviteeName = miniArray[0]
    let inviteeData = miniArray[1]

    if (inviteeName !== "plusOne" && inviteeName !== "baby") {
      if (inviteeData) {
        willAttend.push(inviteeName)
      } else {
        willNotAttend.push(inviteeName)
      }
    } else if (inviteeName === "plusOne") {
      if (inviteeData.name === "") {
        inviteeName = "Your Plus One"
      } else {
        inviteeName = inviteeData.name
      }

      if (inviteeData.attending) {
        willAttend.push(inviteeName)
      } else {
        let willNotAttend = []
      }
    }
  })

  let summary = "Here is a summary of your RSVP so far:"
  let nameLists =
    <div className='rsvp-summary'>
      {makeListOfNames("Attending: ", willAttend)}
      {makeListOfNames("Not Attending: ", willNotAttend)}
    </div>

  let dietaryRestrictions;
  if (props.dietaryRestrictions) {
    dietaryRestrictions =
    <div className='diet'>
      <h3 className='title'>Dietary Restrictions:</h3>
      <div className='diet-text'>
        {props.dietaryRestrictions}
      </div>
    </div>
  }

  return(
    <div>
      {introPara}
      <h3 className='center'>{summary}</h3>
      {nameLists}
      {dietaryRestrictions}
      <br/>
      <div className='center'>
        <button
          className='button center'
          onClick={props.changeRSVP}
        >
          Change RSVP
        </button>
      </div>
    </div>
  )
}

export default RsvpSummary
