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
    <div className='page whereToPage'>
      <div className='title center'>October 13, 2018</div>
      <h3 className='heading'>
        Galen and Chris are Getting Married!
      </h3>
      <h3 className='title'>
        What would you like to do?
      </h3>
      <ul>
        <li><Link to={RSVPdestination}>Make an RSVP</Link></li>
        <li><Link to='/wedding/location'>Get Location information</Link></li>
      </ul>
      <h3 className='title'>Coming Soon:</h3>
      <ul>
        <li><a href={registrySite}>View the Registry</a></li>
        <li>See Stories that Friends/Family have Shared</li>
        <li>'On the Day' Schedule</li>
        <li>Rehearsal Dinner Information</li>
        <li>Tips/Tricks for Hotel Transportation</li>
      </ul>
    </div>
  )
}

export default WhereTo
