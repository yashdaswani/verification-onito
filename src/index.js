// src/index.js or src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx"; // Ensure the correct path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
