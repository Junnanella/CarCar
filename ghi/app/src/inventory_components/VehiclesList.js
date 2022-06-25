import React from "react";
import "./inventory.css";

export default function VehicleList(props) {
  const { vehicles } = props;

  return (
    <div>
      <h2>Vehicles</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => {
            return (
              <tr key={vehicle.id}>
                <td>{vehicle.name}</td>
                <td>{vehicle.manufacturer.name}</td>
                <td>
                  <img
                    className="vehicleImage"
                    src={vehicle.picture_url}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
