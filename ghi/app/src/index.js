import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  loadAutomobiles,
  loadManufacturers,
  loadVehicles,
} from "./inventory_components/InventoryApi";
import {
  loadCustomers,
  loadSalesPerson,
  loadSalesRecord,
} from "./sales_components/SalesAPI";

const main = async () => {
  const manufacturers = await loadManufacturers();
  const vehicles = await loadVehicles();
  const autos = await loadAutomobiles();
  const salespersons = await loadSalesPerson();
  const customers = await loadCustomers();
  const salesrecords = await loadSalesRecord();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        manufacturers={manufacturers}
        vehicles={vehicles}
        automobiles={autos}
        salespersons={salespersons}
        customers={customers}
        salesrecords={salesrecords}
      />
    </React.StrictMode>
  );
};

main().catch((err) => {
  console.error(err);
});
