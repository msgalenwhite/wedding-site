import React from 'react'

import TextInputField from './TextInputField'

const UpAndDown = props => {

  return(
    <div className="upAndDown">
      <label className='upAndDownCost'>Cost:</label>
      <div className='flexboxDiv'>
        <i className="fa fa-arrow-circle-left"></i>
        <input
          type='text'
          defaultValue='10'
          className='upAndDownCost'
        />
        <i className="fa fa-arrow-circle-right"></i>

      </div>
    </div>
  )
}

export default UpAndDown
