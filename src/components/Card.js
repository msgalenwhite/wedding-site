import React from 'react'
import cardImages from "../constants/CardImages"

const Card = (props) => {

  let potions;
  if (props.potions) {
    potions = < img className = 'potionsPic'
    src = 'http://wiki.dominionstrategy.com/images/7/7a/Potion.png' / >
  }

  return (
    <div>
      <div className ='cardTitleDiv' >
        {props.cardName}
      </div>
      <div>
        <img
          className = 'displayCardImage'
          src = {props.cardImageUrl}
        />
      </div>
      <div className = 'cardTextDiv'>
        {props.cardText}
      </div>
      <div className = 'displayCost' >
        {props.cardCost}
      </div>
      {potions}
      <img
        className = {props.type}    src={cardImages[props.type]}
      />
    </div>
  )
}

export default Card
