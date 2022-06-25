import React, { useState } from "react";

export default function SalesHistory(props) {
  const { salespersons } = props;
  const { salesrecords } = props;
  const [currentSalesPerson, setCurrentSalesPerson] = useState();

  function Filtered(event) {
    setCurrentSalesPerson(Number(event.target.value));
  }
  return (
    <div>
      <h1>Sales History</h1>
      <h3>Employee Sales Records</h3>
      <select
        default="selected"
        onChange={Filtered}
        value={currentSalesPerson}
        id="salesperson-select"
        className="form-select"
      >
        <option value="">Choose Sales Person</option>
        {salespersons.map((salesperson) => {
          return (
            <option key={salesperson.id} value={salesperson.id}>
              {salesperson.employee_num}
            </option>
          );
        })}
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Employee#</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {salesrecords
            .filter((x) => x.sales_person.id === currentSalesPerson)
            .map((salesrecord) => {
              return (
                <tr key={salesrecord.id}>
                  <td>{salesrecord.sales_person.employee_name}</td>
                  <td>{salesrecord.sales_person.employee_num}</td>
                  <td>{salesrecord.customer.customer_name}</td>
                  <td>{salesrecord.automobile.vin}</td>
                  <td>{salesrecord.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h3>Sales Records</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Employee#</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {salesrecords.map((salesrecord) => {
            return (
              <tr key={salesrecord.id}>
                <td>{salesrecord.sales_person.employee_name}</td>
                <td>{salesrecord.sales_person.employee_num}</td>
                <td>{salesrecord.customer.customer_name}</td>
                <td>{salesrecord.automobile.vin}</td>
                <td>{salesrecord.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
