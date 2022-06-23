// Load Data fetching functions
export const loadManufacturers = async () => {
  // fetch data from api
  const response = await fetch("http://localhost:8100/api/manufacturers/");
  const responseJson = await response.json();
  return responseJson;
};

export const loadVehicles = async () => {
  const response = await fetch("http://localhost:8100/api/models/");
  const responseJson = await response.json();
  return responseJson;
};

export const loadAutomobiles = async () => {
  const response = await fetch("http://localhost:8100/api/automobiles/");
  const responseJson = await response.json();
  return responseJson;
};
