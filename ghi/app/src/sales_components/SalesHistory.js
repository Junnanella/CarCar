import React, { useState } from "react";

// 🚨🚨🚨 Write class or function for sales history🚨🚨🚨
export default function SalesHistory(props) {
  const [currentSalesPerson, setCurrentSalesPerson] = useState()

  function Filtered(event) {
    setCurrentSalesPerson(Number(event.target.value))
  }
  return (
    <div>
      <h2>Sales Person History</h2>
      <select default='selected' onChange={Filtered} value={currentSalesPerson} id='salesperson-select' className='form-select'>
        <option value="">Choose Sales Person</option>
        {props.salespersons.sales_persons.map(salesperson => {
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
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {props.salesrecords.sales_record
            .filter(x => x.sales_person.id === currentSalesPerson)
            .map((salesrecord) => {
              return (
                <tr key={salesrecord.id}>
                  <td>{salesrecord.sales_person.employee_name}</td>
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
