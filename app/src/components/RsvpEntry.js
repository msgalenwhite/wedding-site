import React from 'react'

const RsvpEntry = props => {

  let yesBoxStyle;
  let noBoxStyle;

  if (props.attending) {
    yesBoxStyle = "check fa fa-check-square"
    noBoxStyle = "check fa fa-square"
  } else {
    yesBoxStyle = "check fa fa-square"
    noBoxStyle = "check fa fa-check-square"
  }

  let attending = <i
    className={`${yesBoxStyle} attending`}
    onClick={props.yesClick}
  >
  </i>

  let notAttending = <i
    className={`${noBoxStyle} notAttending`}
    onClick={props.noClick}
  >
  </i>

  return(
    <div>
      <h2>{props.name}</h2>

      <span>
        {attending}
        <label>Will Attend</label>
      </span>
      <span>
        {notAttending}
        <label>Will Not Attend</label>
      </span>
    </div>
  )
}

export default RsvpEntry
