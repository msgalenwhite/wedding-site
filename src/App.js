import React, { Component } from 'react'
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import './main.scss'

import MainPage from './containers/MainPage'
import HotelInfo from './components/HotelInfo'
import WhereTo from './components/WhereTo'
import DummyRSVP from './components/DummyRSVP'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return(

      <Router history={browserHistory}>
        <Route
          path='/'
          component={WhereTo}
        />
        <Route
          path='/wedding/checkbacksoon'
          component={DummyRSVP}
        />
        <Route
          path='/wedding/rsvp'
          component={MainPage}
        />
        <Route
          path='/wedding/location'
          component={HotelInfo}
        />
      </Router>
    )
  }
}

export default App
