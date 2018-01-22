import React from 'react'

const UpAndDownButtons = (props) => {

  let plusIcon = <i className="fa fa-plus" aria-hidden="true"></i>

  let minusIcon = <i className="fa fa-minus" aria-hidden="true"></i>

  return(
    <div className="upAndDownDiv">
      <label className={props.label}>
        {props.label}
      </label>

      {plusIcon}
      <input type="text" className={props.label} value='' />
      {minusIcon}
    </div>
  )
}

export default UpAndDownButtons
