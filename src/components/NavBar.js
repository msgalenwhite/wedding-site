import React from 'react'
import {browserHistory} from 'react-router'

import ViewDeckButton from './ViewDeckButton'
import DesignCardButton from './DesignCardButton'

const NavBar = props => {

  return(
    <div>
      <span className="navBarButtons">
        <DesignCardButton />
        <input
          className='button'
          type='button'
          onClick={browserHistory.goBack}
          value='Back'
        />
        <ViewDeckButton />
      </span>
      {props.children}
    </div>
  )
}

export default NavBar
