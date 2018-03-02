import React from 'react'

import StoryForm from './StoryForm'
import RsvpSummary from './RsvpSummary'

import TextInputField from '../components/TextInputField'

const ReviewAndStoryPage = props => {

  return(
    <div>
      <RsvpSummary
        rsvpStatus={props.rsvpStatus}
        changeRSVP={props.changeRSVP}
        dietaryRestrictions={props.dietaryRestrictions}
      />
      <StoryForm
        stories={props.stories}
        onChange={props.onChange}
        handleStorySubmit={props.handleStorySubmit}
        handleEditStory={props.handleEditStory}
      />
      <TextInputField
        name='email'
        label='Email: '
        value={props.email}
        onChange={props.handleEmailChange}
      />
      <button
        className='button'
        onClick={props.handleFullSubmit}
      >
        Submit RSVP
      </button>
    </div>
  )
}

export default ReviewAndStoryPage
