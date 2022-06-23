import React, { useState, useEffect } from "react";
import { createAutomobiles, loadVehicles } from "./InventoryApi";

export const AutomobileForm = (props) => {
  const [values, setValues] = useState({
    color: "",
    year: "",
    vin: "",
    model: "",
  });

  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const models = await loadVehicles();
      setModels(models);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      color: values.color,
      year: values.year,
      vin: values.vin,
      model: values.model,
    };

    await createAutomobiles(data);
    setValues({
      color: "",
      year: "",
      vin: "",
      model: "",
    });
  };

  const handleChangeColor = (event) => {
    setValues((values) => ({
      ...values,
      color: event.target.value,
    }));
  };

  const handleChangeYear = (event) => {
    setValues((values) => ({
      ...values,
      year: event.target.value,
    }));
  };

  const handleChangeVin = (event) => {
    setValues((values) => ({
      ...values,
      vin: event.target.value,
    }));
  };

  const handleChangeModel = (event) => {
    setValues((values) => ({
      ...values,
      model: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add an Automobile to Inventory</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeColor}
                value={values.color}
                placeholder="Color"
                required
                type="text"
                name="color"
                id="color"
                className="form-control"
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeYear}
                value={values.year}
                placeholder="Year"
                required
                type="text"
                name="year"
                id="year"
                className="form-control"
              />
              <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeVin}
                value={values.vin}
                placeholder="VIN"
                required
                type="text"
                name="vin"
                id="vin"
                className="form-control"
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChangeModel}
                value={values.model}
                required
                name="model"
                id="model"
                className="form-select"
              >
                <option value="">Select the Vehicle Model</option>
                {models.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
