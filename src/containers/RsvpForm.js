import React from 'react'

import RsvpEntry from './RsvpEntry'

const RsvpForm = props => {

  let entries;

  //I'll be getting a set of info from the previous page and going through it to create a set of RSVP entries for each person.  To start, I'm going to put a single one in the form

  return(
    <div>
      <h3 className='title'>
        Thank you for your RSVP!
      </h3>
      <h3 className='title'>
        Will we be seeing you in Gloucester, MA on October 13, 2018?
      </h3>

      <form>

        <RsvpEntry

        />

        <input
          type='submit'
          className='button'
        />
      </form>
    </div>
  )
}

export default RsvpForm
