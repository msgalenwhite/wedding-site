import React, {Component} from 'react'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {


  }
  
  render() {
    return(
      <h1>Welcome to the Card Designer!</h1>
    )
  }

}

export default HomePage
