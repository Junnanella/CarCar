import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const loadManufacturers = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8100/api/manufacturers/");
  const responseJson = await response.json();
  return responseJson;
};

// invoke loading functions through main so they are all in one place
const main = async () => {
  // wait for loading functions to return data
  // then pass them in as props to App.js in the render
  const manufacturers = await loadManufacturers();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App manufacturers={manufacturers} />
    </React.StrictMode>
  );
};

// invoke main function and have it catch and print errors
main().catch((err) => {
  console.error(err);
});
