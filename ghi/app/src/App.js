import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./inventory_components/ManufacturersList";
import ManufacturerForm from "./inventory_components/ManufacturerForm";
import VehicleList from "./inventory_components/VehiclesList";
import VehicleForm from "./inventory_components/VehicleForm";
import AutomobileList from "./inventory_components/AutomobileList";
import AutomobileForm from "./inventory_components/AutomobileForm";

// import Services components

// import Customer components


// import Sales components
import { SalesPersonForm } from "./sales_components/SalesPersonForm";
import { CreateTechnicianForm } from "./services_components/TechnicianForm";
import CreateAppointmentForm from "./services_components/AppointmentsForm";

// 🚨🚨🚨 Import sales history class or function🚨🚨🚨
import SalesHistory from "./sales_components/SalesHistory";
import CreateSalesRecord from "./sales_components/SalesRecordForm";
// 🚨🚨🚨 Then add route in the return of App function🚨🚨🚨

function App(props) {
  const { manufacturers } = props.manufacturers;
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
          {/* <Route path="salesperson/new/" element={<CreateSalesPerson />} /> */}
          {/* <Route path="customer/new/" element={<CreateCustomer />} /> */}
          <Route path='sales_record' >
            <Route path="new" element={<CreateSalesRecord />} />
            <Route path="history" element={<SalesHistory salespersons={props.salespersons} salesrecords={props.salesrecords} />} />
          </Route>
          <Route path="technicians/new/" element={<CreateTechnicianForm />} />
          <Route path="service_appointments/new/" element={<CreateAppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
