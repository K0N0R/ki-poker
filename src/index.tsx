import React from "react";
import ReactDOM from "react-dom/client"; // Użyj właściwego importu
import "./styles/index.scss";
import { Planner } from "./components/planner";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Utwórz root
  root.render(
    <React.StrictMode>
      <Planner />
    </React.StrictMode>
  );
}