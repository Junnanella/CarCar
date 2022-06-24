import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loadManufacturers } from "./inventory_components/InventoryApi";
import { loadVehicles } from "./inventory_components/InventoryApi";
import { loadAutomobiles } from "./inventory_components/InventoryApi";

const main = async () => {
  const manufacturers = await loadManufacturers();
  const vehicles = await loadVehicles();
  const autos = await loadAutomobiles();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        manufacturers={manufacturers}
        vehicles={vehicles}
        automobiles={autos}
      />
    </React.StrictMode>
  );
};

main().catch((err) => {
  console.error(err);
});
