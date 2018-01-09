import React from 'react'

const TextInputField = props => {
  return(
    <label className={props.name}>
      {props.label}
      <input
        type="text"
        className={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )

}

export default TextInputField
