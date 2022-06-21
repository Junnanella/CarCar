import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

// import Inventory components
import ManufacturerList from "./inventory_components/ManufacturersList";
import ManufacturerForm from "./inventory_components/ManufacturerForm";
import VehicleList from "./inventory_components/VehiclesList";
import VehicleForm from "./inventory_components/VehicleForm";
import AutomobileList from "./inventory_components/AutomobileList";
import AutomobileForm from "./inventory_components/AutomobileForm";

// import Services components

// import Sales components
import CreateSalesPerson from "./sales_components/SalesPersonForm";
import CreateCustomer from "./sales_components/PotentialCustomerForm";

function App(props) {
  const { manufacturers } = props.manufacturers;
  // grab models from props.vehicles, and rename to vehicles
  const { models: vehicles } = props.vehicles;
  const { autos: automobiles } = props.automobiles;

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="manufacturers/"
            element={<ManufacturerList manufacturers={manufacturers} />}
          />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route
            path="vehicles/"
            element={<VehicleList vehicles={vehicles} />}
          />
          <Route path="vehicles/new/" element={<VehicleForm />} />
          <Route
            path="automobiles/"
            element={<AutomobileList automobiles={automobiles} />}
          />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
          <Route path="salesperson/new/" element={<CreateSalesPerson />} />
          <Route path="customer/new/" element={<CreateCustomer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
