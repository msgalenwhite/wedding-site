import React from 'react'
import {Link} from 'react-router'

const ReturnButton = props => {

  return(
    <div className='center'>
      <Link to='/'>
        <button className='button'>
          Return to Main
        </button>
      </Link>
    </div>
  )
}

export default ReturnButton
