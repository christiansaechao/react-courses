import React from "react"
// passing in card here, means you should know what you're passing in
// before hand. 
const PokemonCard = ({ card }) => {
  return (
    <div key={card.id}>
      {card.number}
      Name: {card.name}
      <p>Price: ${card.cardmarket?.prices.averageSellPrice} ({ card.rarity || 'common' })</p>
      <img src={card.images.small} alt={card.name} />
      <div>{card.types ? card.types : card.supertype}</div>
    </div>
  );
};

export default PokemonCard;