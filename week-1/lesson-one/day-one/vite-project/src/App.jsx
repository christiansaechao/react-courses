import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import ShopItem from './components/shop-items/ShopItem.jsx';
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/footer";
import Iphone from './components/fathers-day/father-day-iphone-section.jsx';
import Banner from "./components/banner/first-banner.jsx"

function App() {
  const [count, setCount] = useState(0);
  const [isOnBannerTab, setIsOnBannerTab] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  const [name, setName] = useState('William Weekes');

  function changeName() {
    setName('Colby');
  }

  const addTen = () => {
    setCount(count + 10);
  }

  const getPokemon = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      if (data) {
        setPokemonData(data);
        console.log(data);
      }
    } catch {
      console.log('error');
    }
  }

  React.useEffect(() => {
    getPokemon();
  }, [])

  return (
    <>
      {console.log(name)}
      <button onClick={() => addTen()}>Add 10 to count</button>
      <Navbar />
      {isOnBannerTab && <Banner />}
      <ShopItem heading={"Card"} subheading={"Get up to 3% Daily Cash back with every purchase"} buttonText={"Learn more"} />
      <Iphone />
      <Footer />
    </>
  )
}

export default App;