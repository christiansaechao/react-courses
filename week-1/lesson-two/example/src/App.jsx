import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/pokemon-card";
import Search from "./components/search";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Assume min-max prices

  const fetchPokemonSet = async () => {
    try {
      const { data } = await axios.get("https://api.pokemontcg.io/v2/cards", {
        params: {
          q: "set.id:SV3",
          orderBy: "nationalPokedexNumbers",
          pageSize: 250,
        },
        headers: {
          "X-Api-Key": "c26040e7-239f-4ed5-9dad-af194d301eef",
        },
      });

      setCards(data.data);
      console.log(data.data);
    } catch (err) {
      console.error("Error fetching Pokémon set:", err);
    }
  };

  useEffect(() => {
    fetchPokemonSet();
  }, []);

  const filteredCards = cards.filter((card) => {
    const searchedCard = card.name.toLowerCase().includes(search.toLowerCase());
    const typeCard =
      selectedType === "" ||
      card.types?.[0]?.toLowerCase() === selectedType.toLowerCase();
    const rarityCard =
      selectedRarity === "" ||
      card.rarity?.toLowerCase() === selectedRarity.toLowerCase();

    return searchedCard && typeCard && rarityCard;
  });

  // const filteredCards = React.useMemo(() => {
  //   return cards.filter((card) =>
  //     card.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // }, [search, selectedType, selectedRarity]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      {selectedRarity && <p>Selected Rarity: {selectedRarity}</p>}
      {selectedType && <p>Selected Type: {selectedType}</p>}
      <select
        onChange={(e) => setSelectedRarity(e.target.value)}
        value={selectedRarity}
      >
        <option value="">All Rarities</option>
        <option value="Common">Common</option>
        <option value="Uncommon">Uncommon</option>
        <option value="Rare">Rare</option>
      </select>

      <select
        onChange={(e) => setSelectedType(e.target.value)}
        value={selectedType}
      >
        <option value="">All Types</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        {/* Add all other types */}
      </select>

      <div className="pokemon-container">
        {filteredCards.map((card) => (
          <PokemonCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default App;
