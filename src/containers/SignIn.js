import React from 'react'

import TextInputField from '../components/TextInputField'
import Errors from '../constants/Errors'

const SignIn = props => {

  //loop through the errors object and assign errors as necessary
  let genericError;
  let nameError;
  let passwordError;

  if (props.errors.generic) {
    genericError = Errors.generic
  }

  return(
    <form className='SignIn' onSubmit={props.handleSubmit}>
      <div className='error'>
        {genericError}
      </div>

      <TextInputField
        name='name'
        value={props.name}
        onChange={props.handleTextChange}
        label="Name: "
        error={nameError}
      />
      <TextInputField
        name='password'
        value={props.password}
        onChange={props.handleTextChange}
        label="Password: "
        error={passwordError}
      />
      <input
        type='submit'
        className='button'
      />
    </form>
  )
}

export default SignIn
