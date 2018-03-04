import React from 'react'

const TextInputField = props => {
  return(
    <div className='textInput'>
      <h6 className="error">{props.errorMessage}</h6>
      <label className={props.name}>
        <span className='textLabel'>{props.label}</span>
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
