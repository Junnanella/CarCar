import React, { useState } from "react";
import { createSalesPerson } from "./SalesAPI";
import "./sales.css";

export const SalesPersonForm = (props) => {
  const [values, setValues] = useState({
    employee_name: "",
    employee_num: "",
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...values,
    };

    await createSalesPerson(data);
    setValues({
      employee_name: "",
      employee_num: "",
    });
    setIsSuccessfullySubmitted(true);
  };

  const handleChangeEmployeeName = (event) => {
    setValues({
      ...values,
      employee_name: event.target.value,
    });
  };

  const handleChangeEmployeeNum = (event) => {
    setValues({
      ...values,
      employee_num: event.target.value,
    });
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Sales Person</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeEmployeeName}
                value={values.employee_name}
                placeholder="Employee Name"
                required
                type="text"
                name="employee_name"
                id="employee_name"
                className="form-control"
              />
              <label htmlFor="employee_name">Employee Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeEmployeeNum}
                value={values.employee_num}
                placeholder="Employee Number"
                required
                type="text"
                name="employee_num"
                id="employee_num"
                className="form-control"
              />
              <label htmlFor="employee_num">Employee Number</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
          {isSuccessfullySubmitted && (
            <div className="successfully_submitted">
              New Sales Person Added to System
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
