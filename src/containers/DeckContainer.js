 import React from 'react'

 const DeckContainer = (props) => {
   let fullDeck;

   let fetchFullDeck = () => {
     fetch('http://localhost:4567/api/v1/cards')
     .then(response => response.json())
     .then(body => {
       fullDeck = body.cards

       //conditional here to return image representing empty deck if there is no deck present
     })
   }

   return(
     <div>
      <h3>Hello from the deck container!</h3>
      <button onClick={fetchFullDeck}>Show me!</button>
    </div>
   )
 }


 export default DeckContainer
