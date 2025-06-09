import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Pages from "./pages/index.js";
import NavBar from "./components/NavBar/navbar.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="create" element={<Pages.CreatePost />} />
            {/* <Route path="counter" element={<Pages.Counter />} /> */}
            <Route path="posts">
              <Route index element={<Pages.AllPost />} />
              <Route path=":postId" element={<Pages.ViewPost />} />
              <Route path=":postId/edit" element={<Pages.EditPost />} />
            </Route>
            <Route path="search" element={<Pages.SearchPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
