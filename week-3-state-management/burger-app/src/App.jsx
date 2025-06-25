import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Total from "./pages/Total";
import BuildABurger from "./pages/build-a-burger";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Total />} path="/total" />
          <Route element={<BuildABurger />} path="/build" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
