import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  loadAutomobiles,
  loadManufacturers,
  loadVehicles,
} from "./inventory_components/InventoryApi";

const loadSalesPerson = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8090/api/salesperson/");
  const responseJson = await response.json();
  return responseJson;
};

const loadCustomers = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8090/api/customers/");
  const responseJson = await response.json();
  return responseJson;
};
const loadSalesRecords = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8090/api/salesrecord/");
  const responseJson = await response.json();
  return responseJson;
};

const main = async () => {
  const manufacturers = await loadManufacturers();
  const vehicles = await loadVehicles();
  const autos = await loadAutomobiles();
  const salespersons = await loadSalesPerson();
  const customers = await loadCustomers();
  const salesrecords = await loadSalesRecords();

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
