import React from 'react'

const RsvpEntry = props => {

  let emptyBox = <i className="check fa fa-square"></i>
  let checkedBox = <i className="check fa fa-check-square"></i>

  let check = <i className="fa fa-check appearOnHover"></i>
  return(
    <div>
      {check}
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
