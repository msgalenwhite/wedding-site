import React from 'react'

const Card = (props) => {

  let potions;
  if (props.potions) {
    potions = <img className='potionsPic' src='http://wiki.dominionstrategy.com/images/7/7a/Potion.png' />
  }

  return(
    <div className='cardInDeck' key={props.id}>
      <div className='cardTitleDiv'>
        {props.cardName}
      </div>
      <div>
        <img className='displayCardImage' src={props.cardImageUrl}/>
      </div>
      <div className='cardTextDiv'>
        {props.cardText}
      </div>
      <div className='cardCost'>
        {props.cardCost}
      </div>
      {potions}
      <img className='actionCard' src='https://i.imgur.com/jUq8A3n.png'/>
    </div>
  )
 }


export default Card
