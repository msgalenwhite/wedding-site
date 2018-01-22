import React from 'react'

import DropDown from '../components/DropDown'
import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'
import UpAndDownButtons from '../components/UpAndDownButtons'

const NameContainer = props => {
  let titleOptions = ["Poor Ol'", "Peasant", "Lady", "Sir"]

  return(
    <div>
      <h1 className='pageTitle'>Welcome to the Card Designer!</h1>
      <form onSubmit={props.onSubmit}>
        {props.error}
        <DropDown
          handleClick={props.handleTitleClick}
          options={titleOptions}
          label="Title: "
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
        <SubmitButton />
      </form>
    </div>
  )
}

export default NameContainer
