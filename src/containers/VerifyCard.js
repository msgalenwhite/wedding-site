import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'
import SubmitButton from '../components/SubmitButton'
import TextInputField from '../components/TextInputField'

const VerifyCard = (props) => {

  // cardData={this.state}
  // addToJSON={this.handleAddToJSON}
  // handleChange={this.handleValueChange}
  // editCard

  let handleEditClick = () => {
    props.editCard(props.cardData)
  }

  return(
    <div>
      <div className="verifyForm">
        <h2>Add a Note</h2>
        <TextInputField
          onChange={props.handleChange}
          value={props.cardData.extraInfo}
          name="extraInfo"
          label="Add a Note:"
          key="extraInfo"
        />
      </div>

      <div onClick={props.editCard}>
        <input
          className='button'
          type="button"
          value="Go Back"
        />
      </div>

      <div className="verifyButtons">
        <div onClick={props.addToJSON}>
          <Link to='/cardapp/yourdeck'>
            <SubmitButton/>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default VerifyCard
