import React from 'react'

import TitleDropDown from '../components/TitleDropDown'
import TextInputField from '../components/TextInputField'

const NameContainer = props => {

//GOAL: store name info in HomePage,
//on Submit kick the full name up to app
//why? Can't pass changing props to <Route> tags
  return(
    <form onSubmit={props.onSubmit}>
    <TitleDropDown
      handleTitleClick={props.handleTitleClick}
    />
    <TextInputField
      label="First Name:"
      value={props.firstName}
      onChange={props.handleChange}
      name="firstName"
    />
    <TextInputField
      label="Last Name:"
      value={props.lastName}
      onChange={props.handleChange}
      name="lastName"
    />
    <input
      className='button'
      type='submit'
      value='Submit'
    />
    </form>
  )
}

export default NameContainer
