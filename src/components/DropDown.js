import React from 'react'

const DropDown = props => {

  let handleClick = (event) => {
    let value = event.target.value
    props.handleClick(value)
  }

  let optionTags = props.options.map((value) => {
    return (
      <option key={value} value={value}>{value}</option>
    )
  })

  return(
    <div className="dropDown">
      <label>{props.label}</label>
      <select onChange={handleClick}>
        <option defaultValue=""></option>
        {optionTags}
      </select>
    </div>
  )
}

export default DropDown
