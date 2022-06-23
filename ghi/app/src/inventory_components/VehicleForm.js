import React from "react";

export default class VehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture_url: "",
      manufacturer: "",
      manufacturers: [],
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      picture_url: this.state.picture_url,
      manufacturer: this.state.manufacturer,
    };

    const url = "http://localhost:8100/api/models/";
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
        name: "",
        picture_url: "",
        manufacturer: "",
      });
    }
  }

  // handle changes on form
  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangePicture(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ manufacturer: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Vehicle</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeName}
                  value={this.state.name}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Vehicle Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangePicture}
                  value={this.state.picture_url}
                  placeholder="picture url"
                  required
                  type="text"
                  name="picture_url"
                  id="picture_url"
                  className="form-control"
                />
                <label htmlFor="name">Picture Url</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeManufacturer}
                  value={this.state.manufacturer}
                  required
                  name="manufacturer"
                  id="manufacturer"
                  className="form-select"
                >
                  <option value="">Select the Manufacturer</option>
                  {this.state.manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
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
