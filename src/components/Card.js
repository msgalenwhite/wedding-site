import React from 'react'

const Card = (props) => {

  let potions;
  if (props.potions) {
    potions = <div className='cardPotions'>Requires Potions</div>
  }

  return(
    <div className='card'>
      <div className='cardTitle'>
        {props.cardName}
      </div>
      <div className='cardText'>
        {props.cardText}
      </div>
      <div className='cardCost'>
        Cost: {props.cardCost}
      </div>
      {potions}
      <img
        className='displayCardImage'
        src={props.cardImageUrl}
        alt='Card Image'
      />
    </div>
  )
 }


export default Card
