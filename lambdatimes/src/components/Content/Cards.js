import React from 'react';
import Card from './Card';
import Proptypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => <Card key={card.headline} data={card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.Proptypes = {
  cards: Proptypes.arrayOf(Proptypes.object),
};
export default Cards;