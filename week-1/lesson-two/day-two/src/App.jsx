import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import TodoApp from "./pages/TodoApp";
import MartinPage from "./pages/martinpage";
import Name from "./pages/joel";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/martin">Go To Martin's page</Link>
          <Link to="/">Home</Link>
          <Link to="/joel">Go To Joel page</Link>
        </div>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/joel" element={<Name />} />
          <Route path="/martin" element={<MartinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
