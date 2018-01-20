import React from 'react'

const TextInputField = props => {
  return(
    <div className='textInput'>
      <h6 className="error">{props.errorMessage}</h6>
      <label className={props.name}>
        {props.label}
        <input
          type="text"
          className={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  )

}

export default TextInputField
