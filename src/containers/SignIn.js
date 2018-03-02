import React from 'react'

import TextInputField from '../components/TextInputField'
import Errors from '../constants/Errors'

const SignIn = props => {

  let currentErrors = {}

  Object.entries(props.errors).forEach((errorMessage) => {
    let errorType = errorMessage[0]
    let errorBoolean = errorMessage[1]

    if (errorBoolean) {
      let errorText = Errors[errorType]

      currentErrors[errorType] = errorText
    }
  })

  return(
    <form className='SignIn center' onSubmit={props.handleSubmit}>
      <div className='error'>
        {currentErrors['generic']}
      </div>

      <TextInputField
        name='name'
        value={props.name}
        onChange={props.handleTextChange}
        label="Name: "
        errorMessage={currentErrors['name']}
      />
      <TextInputField
        name='password'
        value={props.password}
        onChange={props.handleTextChange}
        label="Password: "
        errorMessage={currentErrors['password']}
      />
      <input
        type='submit'
        className='button'
      />
    </form>
  )
}

export default SignIn
