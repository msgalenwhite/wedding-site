import React from 'react'
import {Link} from 'react-router'

const LinkButton = (props) => {
  let classNames = `${props.className} button`

  return (
    <div className={classNames}>
      <Link to={props.destination}>
        {props.label}
      </Link>
    </div>
  )
}


export default LinkButton
