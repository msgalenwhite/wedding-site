import React from 'react'
import {browserHistory} from 'react-router'

import LinkButton from './LinkButton'

const NavBar = props => {

  return(
    <div>
      <div className='navBarHeader'>
        <span className='navButtons'>
            <LinkButton
              className="navButton"
              destination="/cardapp/yourdeck"
              label="View Your Deck"
            />
            <input
              className='navButton button'
              type='button'
              onClick={browserHistory.goBack}
              value='Back'
            />
            <LinkButton
              className="navButton"
              destination='/cardapp/designer'
              label="Design New Card"
            />
        </span>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar
