import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ParticlesBg from "particles-bg";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParticlesBg type="cobweb" bg />
    <App />
  </StrictMode>
);
