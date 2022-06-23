import React, { useState } from "react";
import { createCustomer } from "./SalesAPI";

export const CustomerForm = (props) => {
  const [values, setValues] = useState({
    customer_name: "",
    address: "",
    phone_number: "",
  });

  const clearState = () => {
    setValues({
      customer_name: "",
      address: "",
      phone_number: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...values,
    };

    await createCustomer(data);
    clearState();
  };

  const handleChangeCustomerName = (event) => {
    setValues((values) => ({
      ...values,
      customer_name: event.target.value,
    }));
  };

  const handleChangeAddress = (event) => {
    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  const handleChangePhoneNumber = (event) => {
    setValues((values) => ({
      ...values,
      phone_number: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Customer</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeCustomerName}
                value={values.customer_name}
                placeholder="Customer Name"
                required
                type="text"
                name="customer name"
                id="customer name"
                className="form-control"
              />
              <label htmlFor="customer name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangeAddress}
                value={values.address}
                placeholder="Address"
                required
                type="text"
                name="address"
                id="address"
                className="form-control"
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChangePhoneNumber}
                value={values.phone_number}
                placeholder="Phone Number"
                required
                type="text"
                name="phone number"
                id="phone number"
                className="form-control"
              />
              <label htmlFor="phone number">PhoneNumber</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
