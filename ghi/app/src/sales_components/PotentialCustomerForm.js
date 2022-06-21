import React from "react";

export default class CreateCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_name: "",
      address: "",
      phone_number: "",
    };
    this.handleChangeCustomerName = this.handleChangeCustomerName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      customer_name: this.state.customer_name,
      address: this.state.address,
      phone_number: this.state.phone_number,
    };
    console.log("🐰🐰🐰", data);
  }

  // 🐰🐰🐰 Uncomment code below  and take out the above handleSubmit 🐰🐰🐰
  // async handleSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     customer_name: this.state.customer_name,
  //     address: this.state.address,
  //     phone_number: this.state.phone_number
  //   };

  //   const url = "http://localhost:8090/api/sales/";
  //   const fetchConfig = {
  //     method: "post",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const response = await fetch(url, fetchConfig);
  //   if (response.ok) {
  //     this.setState({
  //       customer_name: "",
  //       address: "",
  //       phone_number: "",
  //     })
  //   }
  // }

  handleChangeCustomerName(event) {
    const value = event.target.value;
    this.setState({ customer_name: value });
  }

  handleChangeAddress(event) {
    const value = event.target.value;
    this.setState({ address: value });
  }

  handleChangePhoneNumber(event) {
    const value = event.target.value;
    this.setState({ phone_number: value });
  }

  //  🐰🐰🐰 Add the handle Change methods to form onSubmit🐰🐰🐰

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Customer</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeCustomerName}
                  value={this.customer_name}
                  placeholder="Customer Name"
                  required
                  type="text"
                  name="customer name"
                  id="customer name"
                  className="form-control"
                />
                <label htmlFor="customer name">Customer Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeAddress}
                  value={this.address}
                  placeholder="Address"
                  required
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangePhoneNumber}
                  value={this.phone_number}
                  placeholder="Phone Number"
                  required
                  type="text"
                  name="phone number"
                  id="phone number"
                  className="form-control"
                />
                <label htmlFor="phone number">PhoneNumber</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
