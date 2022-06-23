export const loadManufacturers = async () => {
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

export const createManufacturer = async (data) => {
  const url = "http://localhost:8100/api/manufacturers/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, fetchConfig);
  return response;
};