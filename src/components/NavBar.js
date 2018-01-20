import React from 'react'
import {browserHistory} from 'react-router'

import ViewDeckButton from './ViewDeckButton'
import DesignCardButton from './DesignCardButton'

const NavBar = props => {

  return(
    <div>
      <div className='navBarHeader'>
        <span className='navButtons'>
          <DesignCardButton />
          <input
            className='button navButton'
            type='button'
            onClick={browserHistory.goBack}
            value='Back'
          />
          <ViewDeckButton />
        </span>
      </div>
      {props.children}
      <div className='navBarFooter'>
      </div>
    </div>
  )
}

export default NavBar
