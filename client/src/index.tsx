import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App.tsx";
import "./app/layout/styles.css";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
