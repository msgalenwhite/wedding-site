import React from 'react'

const RsvpEntry = props => {

  //this will be for each person.  They will be asked if they WILL or WILL NOT attend

  let emptyBox = <i className="check fas fa-square"></i>
  let checkedBox = <i className="check fas fa-check-square"></i>

  // if it's simpler, this is another option:
  // <input id='checkBox' type='checkbox'/>

  return(
    <div>
      <h2>{props.name}</h2>

      <span>
        {checkedBox}

        <label>Will Attend</label>
      </span>
      <span>
        {emptyBox}
        <label>Will Not Attend</label>
      </span>
    </div>
  )
}

export default RsvpEntry
