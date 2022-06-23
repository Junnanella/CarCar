import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Load Data functions
const loadManufacturers = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8100/api/manufacturers/");
  const responseJson = await response.json();
  return responseJson;
};

const loadVehicles = async () => {
  const response = await fetch("http://localhost:8100/api/models/");
  const responseJson = await response.json();
  return responseJson;
};

const loadAutomobiles = async () => {
  const response = await fetch("http://localhost:8100/api/automobiles/");
  const responseJson = await response.json();
  return responseJson;
};
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

// invoke main function and have it catch and print errors
main().catch((err) => {
  console.error(err);
});
