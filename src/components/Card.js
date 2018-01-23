import React from 'react'
import cardImages from "../constants/CardImages"

const Card = (props) => {



  let tags = {
    title: 'cardTitleDiv',
    pic: 'displayCardImage',
    text: 'cardTextDiv',
    cost: 'displayCost',
    potions: 'potionsPic'
  }

  Object.keys(tags).forEach ((key) => {
    tags[key] = tags[key] + ` ${props.type}${tags[key]}`
  })

  let potions;
  if (props.potions) {
    potions = <img className={tags.potions}
    src='http://wiki.dominionstrategy.com/images/7/7a/Potion.png' />
  }

  return (
    <div>
      <div className={tags.title} >
        {props.cardName}
      </div>
      <div>
        <img
          className={tags.pic}
          src = {props.cardImageUrl}
        />
      </div>
      <div className={tags.text}>
        {props.cardText}
      </div>
      <div className={tags.cost} >
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
