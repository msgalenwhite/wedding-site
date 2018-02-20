import React from 'react'

const RsvpEntry = props => {

  //this will be for each person.  They will be asked if they WILL or WILL NOT attend

  //logic: if object.include(enteredName) return object
  let person = 'Brian Schwartz'

  let emptyBox = <i className="check fas fa-square"></i>
  let checkedBox = <i className="check fas fa-check-square"></i>

  // if it's simpler, this is another option:
  // <input id='checkBox' type='checkbox'/>

  return(
    <div>
      <div>{person}</div>

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
