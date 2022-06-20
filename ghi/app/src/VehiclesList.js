import React from "react";

export default function VehicleList(props) {
  const { vehicles } = props;
  return (
    <div>
      <h2>Vehicles</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => {
            return (
              <tr key={vehicle.id}>
                <td>{vehicle.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
