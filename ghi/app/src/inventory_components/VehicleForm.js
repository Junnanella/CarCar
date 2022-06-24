import React, { useEffect, useState } from "react";
import { createVehicle, loadManufacturers } from "./InventoryApi";
import "./inventory.css";

export const VehicleForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    picture_url: "",
    manufacturer: "",
  });

  const [manufacturers, setManufacturers] = useState([]);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const manufacturers = await loadManufacturers();
      setManufacturers(manufacturers);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: values.name,
      picture_url: values.picture_url,
      manufacturer: values.manufacturer,
    };

    await createVehicle(data);
    setValues({
      name: "",
      picture_url: "",
      manufacturer: "",
    });
    setIsSuccessfullySubmitted(true);
  };

  const handleChangeName = (event) => {
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleChangePicture = (event) => {
    setValues((values) => ({
      ...values,
      picture_url: event.target.value,
    }));
  };

  const handleChangeManufacturer = (event) => {
    setValues((values) => ({
      ...values,
      manufacturer: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Vehicle</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeName}
                value={values.name}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Vehicle Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangePicture}
                value={values.picture_url}
                placeholder="picture url"
                required
                type="text"
                name="picture_url"
                id="picture_url"
                className="form-control"
              />
              <label htmlFor="name">Picture Url</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChangeManufacturer}
                value={values.manufacturer}
                required
                name="manufacturer"
                id="manufacturer"
                className="form-select"
              >
                <option value="">Select the Manufacturer</option>
                {manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
          {isSuccessfullySubmitted && (
            <div className="successfully_submitted">
              New Vehicle Model Added to System
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
