import React, {useState} from "react";

// 🚨🚨🚨 Write class or function for sales history🚨🚨🚨
export default function SalesHistory(props) {
    // const { salesrecords, salespersons } = props;
    console.log('testing1:', props.salesrecords)
    // if (props.salesrecords === undefined) {
    //     return null
    // };
    return (
        <div>
            <h2>Sales Person History</h2>
            <select id='salesperson-select' className='form-select'>
            <option value="">Choose Sales Person</option>
                {props.salespersons.salesperson.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.employee_name}
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
            // .filter(x => x.employee_name === salesperson.employee_name)
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
