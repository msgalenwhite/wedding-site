import React from 'react'
import {Link} from 'react-router'

const WhereTo = props => {

  let RSVPdestination;

  //we will bring RSVP live on July 1st.
  let today = new Date();
  let currentMonth = today.getMonth()+1
  if (currentMonth >= 7) {
    RSVPdestination = '/wedding/rsvp'
  } else {
    RSVPdestination = '/wedding/checkbacksoon'
  }

  // let registrySite = 'https://www.amazon.com/wedding/galen-white-chris-bimbo-gloucester-october-2018/registry/7ZDHYRQ9I313'
  let registrySite;
  return(
    <div className='page'>
      <h3 className='title center'>
        Welcome to Galen and Chris's Wedding Site!<br/>
        What would you like to do?
      </h3>
      <ul>
        <li><Link to={RSVPdestination}>Make an RSVP</Link></li>
        <li><Link to='/wedding/location'>Get Location information</Link></li>
        <li><a href={registrySite}>See their Registry</a></li>
      </ul>
    </div>
  )
}

export default WhereTo
