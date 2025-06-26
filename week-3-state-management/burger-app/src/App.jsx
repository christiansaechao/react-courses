import "./App.css";
import Home from "./pages/home/home.jsx";
import Total from "./pages/Total";
import BurgerDisplayPage from "./pages/burger-display-page.jsx";
import BuildABurger from "./pages/build-a-burger";
import Navbar from "./components/navbar.jsx";
import Cart from "@/pages/cart/cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


/*
  Colour scheme 
background- #8d7658
nav- #4e4231
text-#ebe6e0
*/

function App() {
  return (
    <div className="bg-[#8d7658] max-height-[600px] text-[#ebe6e0]">
      <BrowserRouter>
        <div className="w-[400px] h-[600px] mx-auto flex flex-col justify-between">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Total />} path="/total" />
            <Route element={<BuildABurger />} path="/build" />
            <Route element={<BurgerDisplayPage />} path="/burger-display" />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
