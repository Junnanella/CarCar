export const loadSalesPerson = async () => {
  const response = await fetch("http://localhost:8090/api/salesperson");
  const responseJson = await response.json();
  return responseJson.salesperson;
};

export const loadSalesRecord = async () => {
  const response = await fetch("http://localhost:8090/api/salesrecord");
  const responseJson = await response.json();
  return responseJson.salesrecord;
};

export const loadCustomers = async () => {
  const response = await fetch("http://localhost:8090/api/customers/");
  const responseJson = await response.json();
  return responseJson.customers;
};

export const loadAutomobiles = async () => {
  const response = await fetch("http://localhost:8100/api/automobiles/");
  const responseJson = await response.json();
  return responseJson.automobiles;
};

export const createCustomer = async (data) => {
  const url = "http://localhost:8090/api/customers/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, fetchConfig);
  const newCustomer = await response.json();
  console.log("🐰🐰🐰 New Customer", newCustomer);
  return response;
};

export const createSalesPerson = async (data) => {
  const url = "http://localhost:8090/api/salesperson/";
  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, fetchConfig);
  const newSalesPerson = await response.json();
  console.log("🐰🐰🐰 New Sales Person", newSalesPerson);
  return response;
};

// export const createSalesRecord = async (data) => {
//   const url = 'http://localhost:8090/api/salesrecord/';
//   const fetchConfig = {
//     method: 'post',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const response = await fetch(url, fetchConfig);
//   const newSalesRecord = await response.json();
//   return response;
// }