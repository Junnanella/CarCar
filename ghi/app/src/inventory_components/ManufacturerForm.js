import React, { useState } from "react";
import { createManufacturer } from "./InventoryApi";

export const ManufacturerForm = (props) => {
  const [values, setValues] = useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...values,
    };

    await createManufacturer(data);
    setValues({
      name: "",
    });
  };

  const handleChangeName = (event) => {
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Manufacturer</h1>
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
              <label htmlFor="name">Manufacturer Name</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
