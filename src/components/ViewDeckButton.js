import React from 'react'
import {Link, browserHistory} from 'react-router'

const ViewDeckButton = (props) => {
  return (
    <div className='navButton'>
      <Link to='/cardapp/yourdeck'>
        View Your Deck
      </Link>
    </div>
  )
}


export default ViewDeckButton
