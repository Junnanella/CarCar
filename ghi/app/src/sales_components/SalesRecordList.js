import React from "react";

export default function SalesRecordList(props) {
  const { salesrecords } = props;

  return (
    <div>
      <h2>Sales Record List</h2>
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
          {props.salesrecords.sales_record.map((salesrecord) => {
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