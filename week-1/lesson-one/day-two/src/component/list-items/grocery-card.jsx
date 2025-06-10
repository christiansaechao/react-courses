function GroceryCard({ food }) {
  return (
    <li key={food.id}>
      Name: {food.name}
      <br />
      Amount: {food.quantity}
    </li>
  );
}

/* change size
 *   color
 *   onHover
 */

function AnimalCard({ text }) {
  return (
    <p
      className="text-green-500
        flex justify-center
        transition 
        duration-700 
        ease-in-out 
        bg-yellow-600 
        hover:bg-orange-600 
        transform
        hover:scale-700
        hover: bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500
        z-40"
      key={text.id}
    >
      Name: {text.name} <br />
      Size: {text.size}
    </p>
  );
}

export { AnimalCard, GroceryCard };
