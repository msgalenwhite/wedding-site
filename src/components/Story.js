import React from 'react'

const Story = props => {
  return(
    <div className='story finished-story'>
      <div className='finished-story-text'>
        {props.storyText}
      </div>
      <button className='button'>Edit</button>
    </div>
  )
}

export default Story
