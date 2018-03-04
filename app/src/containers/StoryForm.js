import React from 'react'

import Story from '../components/Story'
import StoryInProgress from '../components/StoryInProgress'

const StoryForm = props => {


  let storyIntro =
    <div className="storyIntro">
      <h3 className="heading">Stories</h3>
      <p>Do you have an embarrassing story of the Bride or Groom that you think would make an excellent wedding toast?</p>
      <p>Please, share it here instead.  We would like to keep our wedding a positive experience for all, and ask that all toasts or stories shared at the wedding be heart-felt or comical without embarrassing the Bride or Groom and ruining their experience.</p>
      <p>Stories shared here will still make it to Galen and Chris, and will be curated into an album that they can enjoy for years to come.</p>
    </div>

  let stories = [
    <StoryInProgress
      key='storyInProgress'
      storyText={props.stories.current}
      onChange={props.onChange}
      onClick={props.handleStorySubmit}
    />
  ]

  props.stories.saved.forEach((story, index) => {
    let key = `story-${index}`
    let uniqueStoryEdit = () => {
      props.handleEditStory(index)
    }
    stories.push(
      <Story
        key={key}
        storyText={story}
        handleEditStory={uniqueStoryEdit}
      />
    )
  })

  //there will be a "bride/groom/both" toggle for topics

  //there will be a place to enter an email

  //there will be a final submit button
  //maybe this button takes you to a summary page?

  //maybe a back button to change their RSVP?
  //should there be a blurb to show what their RSVP was?
    //make sure to account for Plus Ones being "tbd"


  //props.rsvpStatus is an Object


  return(
    <div>
      {storyIntro}
      {stories}
    </div>
  )
}

export default StoryForm
