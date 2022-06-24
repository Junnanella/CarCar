import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./inventory_components/ManufacturersList";
import { ManufacturerForm } from "./inventory_components/ManufacturerForm";
import VehicleList from "./inventory_components/VehiclesList";
import { VehicleForm } from "./inventory_components/VehicleForm";
import AutomobileList from "./inventory_components/AutomobileList";
import { AutomobileForm } from "./inventory_components/AutomobileForm";

// import Services components

// import Customer components
import { CustomerForm } from "./sales_components/CustomerForm";


// import Sales components
import { SalesPersonForm } from "./sales_components/SalesPersonForm";
import { CreateTechnicianForm } from "./services_components/TechnicianForm";
import CreateAppointmentForm from "./services_components/AppointmentsForm";
<<<<<<< HEAD
// import ServiceAppointmentList from "./services_components/AppointmentList";
=======
import ServiceAppointmentList from "./services_components/AppointmentsList";
import { CustomerForm } from "./sales_components/CustomerForm";
>>>>>>> main

// 🚨🚨🚨 Import sales history class or function🚨🚨🚨
import SalesHistory from "./sales_components/SalesHistory";
import CreateSalesRecord from "./sales_components/SalesRecordForm";
import SalesRecordList from "./sales_components/SalesRecordList";
// 🚨🚨🚨 Then add route in the return of App function🚨🚨🚨

function App(props) {
  const { salespersons: salespersons } = props.salespersons;
  const { customers: customers } = props.customers;
  const { salesrecords: salesrecords} = props.salesrecords;
  const { manufacturers, vehicles, automobiles } = props;

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
          <Route path="salesperson/new/" element={<SalesPersonForm />} /> 
          <Route path="customer/new/" element={<CustomerForm />} />
          <Route path='sales_record' >
            <Route path="new" element={<CreateSalesRecord />} />
            {/* <Route path='list' element={<SalesRecordList salesrecords={props.salesrecords}/>}/> */}
            <Route path="history" element={<SalesHistory salespersons={props.salespersons} salesrecords={props.salesrecords} />} />
          </Route>
          <Route path="technicians/new/" element={<CreateTechnicianForm />} />
<<<<<<< HEAD
          <Route path="service_appointments/new/" element={<CreateAppointmentForm />} />
          {/* <Route path="service_appointments/" element={<ServiceAppointmentList />} /> */}
=======
          <Route
            path="service_appointments/new/"
            element={<CreateAppointmentForm />}
          />
          <Route
            path="service_appointments/"
            element={<ServiceAppointmentList />}
          />
>>>>>>> main
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
