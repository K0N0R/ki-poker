import React from "react";
import ReactDOM from "react-dom/client"; // Użyj właściwego importu
import { PlanningRooms } from "./components/PlanningRooms";
import "./index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Utwórz root
  root.render(
    <React.StrictMode>
      <PlanningRooms />
    </React.StrictMode>
  );
}