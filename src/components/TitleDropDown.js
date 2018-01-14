import React from 'react'

const TitleDropDown = props => {

  let handleTitleClick = (event) => {
    let title = event.target.value
    props.handleTitleClick(title)
  }

  let optionTags = props.titleOptions.map((value) => {
    return (
      <option key={value} value={value}>{value}</option>
    )
  })

  return(
    <div>
      <label>Title:</label>
      <select onChange={handleTitleClick}>
        <option defaultValue=""></option>
        {optionTags}
      </select>
    </div>
  )
}

export default TitleDropDown
