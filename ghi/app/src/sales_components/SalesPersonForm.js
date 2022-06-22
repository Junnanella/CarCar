import React from "react";

export default class CreateSalesPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_name: "",
      employee_num: "",
    };
    this.handleChangeEmployeeName = this.handleChangeEmployeeName.bind(this);
    this.handleChangeEmployeeNum = this.handleChangeEmployeeNum.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      employee_name: this.state.employee_name,
      employee_num: this.state.employee_num,
    };
    console.log("🐰🐰🐰", data);
  }

  // 🐰🐰🐰 Uncomment code below to replace the above handleSubmit🐰🐰🐰
  // async handleSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     employee_name: this.state.employee_name,
  //     employee_num: this.state.employee_num
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
  //       employee_name: "",
  //       employee_num: "",
  //     })
  //   }
  // }

  handleChangeEmployeeName(event) {
    const value = event.target.value;
    this.setState({ employee_name: value });
  }

  handleChangeEmployeeNum(event) {
    const value = event.target.value;
    this.setState({ employee_num: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Sales Person</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeEmployeeName}
                  value={this.employee_name}
                  placeholder="Employee Name"
                  required
                  type="text"
                  name="employee name"
                  id="employee name"
                  className="form-control"
                />
                <label htmlFor="employee name">Employee Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeEmployeeNum}
                  value={this.employee_num}
                  placeholder="Employee Num"
                  required
                  type="text"
                  name="employee num"
                  id="employee num"
                  className="form-control"
                />
                <label htmlFor="employee num">Employee Number</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
