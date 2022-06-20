import React from "react";

export default function ManufacturerList(props) {
  const { manufacturers } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {manufacturers.map((manufacturer) => {
          return (
            <tr key={manufacturer.id}>
              <td>{manufacturer.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
