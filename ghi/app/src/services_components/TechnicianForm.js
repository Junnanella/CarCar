import React, { useState } from "react";

export const CreateTechnicianForm = (props) => {
  // declaring variables and setting initial states
  const [values, setValues] = useState({
    name: "",
    employee_number: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...values,
    };
    console.log("newTechnician", data)
  };

  const handleChangeName = (event) => {
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleChangeEmployeeNumber = (event) => {
    setValues((values) => ({
      ...values,
      employee_number: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeName}
                value={values.name}
                placeholder="Technician Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Technician Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeEmployeeNumber}
                value={values.employee_number}
                placeholder="Employee Number"
                required
                type="text"
                name="employee_number"
                id="employee_number"
                className="form-control"
              />
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
