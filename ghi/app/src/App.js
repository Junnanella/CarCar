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
import CreateSalesRecord from "./sales_components/SalesRecordForm";
import SalesHistory from "./sales_components/SalesHistory";

// 🚨🚨🚨 Import sales history class or function🚨🚨🚨
// 🚨🚨🚨 Then add route in the return of App function🚨🚨🚨

function App(props) {
  const { manufacturers } = props.manufacturers;
  // grab models from props.vehicles, and rename to vehicles
  const { models: vehicles } = props.vehicles;
  const { autos: automobiles } = props.automobiles;
  const { salespersons: salespersons } = props.salespersons;
  const { customers: customers } = props.customers;
  const { salesrecords: salesrecords} = props.salesrecords;

  // console.log(props.salespersons)
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
          <Route path='sales_record' >
            {/* <Route path="sales_record/new/" element={<CreateSalesRecord />} /> */}
            <Route path="new" element={<CreateSalesRecord />} />
            <Route path="history" element={<SalesHistory salespersons={props.salespersons} salesrecords={props.salesrecords} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
