import React from "react";
// import { createSalesRecord } from "./SalesAPI";
//  🚨🚨🚨 Complete Code to create working form  🚨🚨🚨

export default class SalesRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: "",
      autos: [],
      sales_person: "",
      sales_persons: [],
      customer: "",
      customers: [],
      price: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAutomobile = this.handleChangeAutomobile.bind(this);
    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }
  async componentDidMount() {
    Promise.all([
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8090/api/salesperson/'),
      fetch('http://localhost:8090/api/customers/')
    ])
      .then(
        ([automobile, sales_person, customers]) => {
          return Promise.all([
            automobile.json(),
            sales_person.json(),
            customers.json()
          ])
        }
      )
      .then(
        ([automobile, sales_persons, customers]) => {
          this.setState(automobile)
          this.setState(sales_persons)
          this.setState(customers)
        }
      )
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.autos
    delete data.sales_persons
    delete data.customers
    const url = 'http://localhost:8090/api/salesrecord/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newRecord = await response.json();

      this.setState({
        auto: "",
        sales_person: "",
        customer: "",
        price: "",
      });
    }
  }

  handleChangeAutomobile(event) {
    const value = event.target.value;
    this.setState({ auto: value });
  }

  handleChangeSalesPerson(event) {
    const value = event.target.value;
    this.setState({ sales_person: value });
  }

  handleChangeCustomer(event) {
    const value = event.target.value;
    this.setState({ customer: value });
  }

  handleChangePrice(event) {
    const value = event.target.value;
    this.setState({ price: value });
  }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a sales record</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeAutomobile}
                  value={this.state.auto}
                  required
                  name="autos"
                  id="autos"
                  className="form-select"
                >
                  <option value="">Select the Automobile</option>
                  {this.state.autos.map(automobile => {
                    return (
                      <option key={automobile.id} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeSalesPerson}
                  value={this.state.sales_person}
                  required
                  name="sales_persons"
                  id="sales_persons"
                  className="form-select"
                >
                  <option value="">Sales Person</option>
                  {this.state.sales_persons.map((salesperson) => {
                    return (
                      <option key={salesperson.id} value={salesperson.employee_name}>
                        {salesperson.employee_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeCustomer}
                  value={this.state.customer}
                  required
                  name="customer"
                  id="customer"
                  className="form-select"
                >
                  <option value="">Customer</option>
                  {this.state.customers.map((customer) => {
                    return (
                      <option key={customer.id} value={customer.phone_number}>
                        {customer.customer_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangePrice}
                  value={this.state.price}
                  placeholder="Price"
                  required
                  type="text"
                  name="price"
                  id="price"
                  className="form-control"
                />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

