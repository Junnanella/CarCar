export const loadServiceAppointments = async () => {
  const response = await fetch("http://localhost:8080/api/appointments");
  const responseJson = await response.json();
  return responseJson.service;
};

export const loadTechnicians = async () => {
  const response = await fetch("http://localhost:8080/api/technicians");
  const responseJson = await response.json();
  return responseJson.technicians;
};

export const loadAutomobiles = async () => {
  const response = await fetch("http://localhost:8100/api/automobiles/");
  const responseJson = await response.json();
  return responseJson.automobiles;
};

export const createTechnician = async (data) => {
  const url = "http://localhost:8080/api/technician/";
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
