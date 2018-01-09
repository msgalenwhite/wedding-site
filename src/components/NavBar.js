import React from 'react'
import {Link, browserHistory} from 'react-router'

const NavBar = props => {

  return(
    <div>
      <input
        className='button'
        type='button'
        onClick={browserHistory.goBack}
        value='Back'
      />
      <Link to='/cardapp/designer'>
        Design a New Card
      </Link>

      {props.children}
    </div>
  )
}

export default NavBar
