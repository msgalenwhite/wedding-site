import React from 'react'
import {Link} from 'react-router'

const LinkButton = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.destination}>
        {props.label}
      </Link>
    </div>
  )
}


export default LinkButton
