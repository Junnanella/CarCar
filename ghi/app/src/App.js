import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

// import Inventory components
import ManufacturerList from "./ManufacturersList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleList from "./VehiclesList";
import VehicleForm from "./VehicleForm";
import AutomobileList from "./AutomobileList";
import AutomobileForm from "./AutomobileForm";

// import Services components

// import Sales components

function App(props) {
  const { manufacturers } = props.manufacturers;
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
          <Route path="vehicles/" element={<VehicleList />} />
          <Route path="vehicles/new/" element={<VehicleForm />} />
          <Route path="automobiles/" element={<AutomobileList />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
