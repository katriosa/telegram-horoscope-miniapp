import React from "react";
import ReactDOM from "react-dom/client";
import AppInitializer from "./AppInitializer";
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppInitializer />
  </React.StrictMode>
);
