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
  console.log("App props:", props);
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
