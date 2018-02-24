import React from 'react'

const RsvpEntry = props => {

  let attending = <i
    className="check fa fa-square"
    onClick={props.yesClick}
  >
  </i>

  let notAttending = <i
    className="check fa fa-square"
    onClick={props.noClick}
  >
  </i>

  let emptyBox =
      <i
        className="check fa fa-square"
        onClick={props.onClick}
      >
      </i>

  let checkedBox = <i className="check fa fa-check-square"></i>

  let check = <i className="fa fa-check appearOnHover"></i>

  return(
    <div>
      {check}
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
