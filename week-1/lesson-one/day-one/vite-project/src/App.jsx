import React, { useState, useEffect } from 'react';
import './App.css'
import ShopItem from './components/shop-items/ShopItem.jsx';
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/footer";
import Iphone from './components/fathers-day/father-day-iphone-section.jsx';
import Banner from "./components/banner/first-banner.jsx"
import { useFetchData } from "../../../../../week-2-hooks/customhooks/useFetchData.js";
import { useInputValue } from "../../../../../week-2-hooks/customhooks/useInputValue.jsx";
import { useBooleanIntent } from "../../../../../week-2-hooks/customhooks/booleanValue.js"

function App() {
  const [isOnBannerTab, setIsOnBannerTab] = useState(false); // number, boolean, string, object, array, data from somewhere
  const [name, setName] = useState("Sensei Chris");

  // custom hooks right here
  const [inputValue, setInputValue] = useInputValue('');
  const pokemonData = useFetchData('https://pokeapi.co/api/v2/pokemon/ditto');

  const [booleanValue, invertBoolean] = useBooleanIntent(false);
  //[variable name, set variable function ]
  // create your function right here
  function changeName() {
    setName(inputValue);
  }

  useEffect(() => {
    setName(booleanValue ? 'Sensei Chris' : 'Sensei Colby');
  }, [])

  return (
    <>
      {"bool value: " + booleanValue} <br />
      <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
      {name} <br />
      <button onClick={() => changeName()}>Change The Name On The Screen</button> <br />
      <button onClick={() => invertBoolean()}>{booleanValue ? 'true' : 'false'}</button>
      <div>Book: Harry Potter [{booleanValue ? 'available' : 'checked out'}]</div>
    </>
  )
}

export default App;