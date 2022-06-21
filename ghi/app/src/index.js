import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { loadManufacturers } from "./inventory_components/InventoryApi";
import { loadVehicles } from "./inventory_components/InventoryApi";
import { loadAutomobiles } from "./inventory_components/InventoryApi";

// invoke loading functions through main so they are all in one place
const main = async () => {
  // wait for loading functions to return data
  // then pass them in as props to App.js in the render
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

// invoke main function and have it catch and print errors
main().catch((err) => {
  console.error(err);
});
