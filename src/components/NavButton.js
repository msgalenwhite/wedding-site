import React from 'react'
import {Link} from 'react-router'

const NavButton = props => {

  let label1;
  let label2;

  if (props.labelClass.includes("Left")){
    label2 = <span className={props.labelClass}>{props.labelText}</span>
  } else if (props.labelClass.includes("Right")){
    label1 = <span className={props.labelClass}>{props.labelText}</span>
  }

  return(
    <div className='navButtonObject'>
      {label1}
      <Link className={props.className} to={props.destination}>
        {props.icon}
      </Link>
      {label2}
    </div>
  )
}

export default NavButton
