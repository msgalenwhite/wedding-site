import React from 'react'

const StoryInProgress = props => {
  return(
    <div className='story'>
      <textarea
        value={props.storyText}
        onChange={props.onChange}
        className='newStory'
      />

      <button
        className='button'
        onClick={props.onClick}
      >
        Add Story
      </button>
    </div>
  )
}

export default StoryInProgress
