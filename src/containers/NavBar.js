import React from 'react'
import {browserHistory} from 'react-router'

const NavBar = props => {

  return(
    <div className='fullPage'>
      <div className='NavBar'>
        <input
          type='button'
          className='button'
          value='Back'
          onClick={browserHistory.goBack}
        />
      </div>
      {props.children}
    </div>
  )
}

export default NavBar
