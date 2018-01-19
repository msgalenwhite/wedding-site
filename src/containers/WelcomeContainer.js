import React from "react"
import {Link} from "react-router"

//Goal: Clicking "View the Deck" will load the deck, THEN pass you along to Deck Container along with all the cards

const WelcomeContainer = props => {
  return(
    <div>
      <h1>Welcome, {props.userName}!</h1>
      <div>
        <h3>Would you like to:</h3>
        <Link to="/cardapp/designer">
          <button>Design a Card</button>
        </Link>
        <Link to="/cardapp/yourdeck">
          <button>View the Deck</button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeContainer
