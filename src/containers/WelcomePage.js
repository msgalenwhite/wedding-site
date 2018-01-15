import React from 'react'
import {Link} from 'react-router'

const WelcomePage = props => {

  return(
    <div>
      <Link to='/cardapp/welcome'>Enter your name</Link>
      <br/>
      <Link to='/cardapp/designer'>Design a Card</Link>
    </div>
  )
}

export default WelcomePage
