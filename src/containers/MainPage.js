import React, {Component} from 'react'

import SignIn from './SignIn'

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <div className='page'>
        <div className='title'>
          Galen and Chris<br/>
          are Getting Married!
        </div>
        <SignIn />
      </div>
    )
  }
}

export default MainPage
