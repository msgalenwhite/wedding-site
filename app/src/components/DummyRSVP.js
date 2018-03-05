import React from 'react'
import ReturnButton from './ReturnButton'

const DummyRSVP = props => {

  return(
    <div className='page dummy'>
      <p>Galen and Chris would love to see you at their wedding, and are so glad you decided to RSVP as soon as possible!</p>
      <p>Unfortunately, they are unable to accept any RSVPs before July 1st.</p>
      <p>Please check back soon!</p>
      <ReturnButton />
    </div>
  )
}

export default DummyRSVP
