import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import ReactModal from "react-modal";
import "./index.css";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
