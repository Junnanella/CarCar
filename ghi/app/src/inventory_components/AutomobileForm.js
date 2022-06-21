import React from "react";

export default class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      year: "",
      vin: "",
      model: "",
      models: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ models: data.models });
    }
  }

  // handleSubmit
  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      color: this.state.color,
      year: this.state.year,
      vin: this.state.vin,
      model: this.state.model,
    };

    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      this.setState({
        color: "",
        year: "",
        vin: "",
        model: "",
      });
    }
  }

  // handle changes on form
  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangeVin(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  handleChangeYear(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }

  handleChangeModel(event) {
    const value = event.target.value;
    this.setState({ model: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add an Automobile to Inventory</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeColor}
                  value={this.state.color}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeYear}
                  value={this.state.year}
                  placeholder="Year"
                  required
                  type="text"
                  name="year"
                  id="year"
                  className="form-control"
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeVin}
                  value={this.state.vin}
                  placeholder="VIN"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeModel}
                  value={this.state.model}
                  required
                  name="model"
                  id="model"
                  className="form-select"
                >
                  <option value="">Select the Vehicle Model</option>
                  {this.state.models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
