import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CryptoProvider from "@/provider/crypto-proivder.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <CryptoProvider>
        <App />
      </CryptoProvider>
  </StrictMode>
);
