import React from 'react';

class AppointmentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            customer_name: '',
            date: '',
            time: '',
            reason: '',
            technician: [],
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeCustomerName = this.handleChangeCustomerName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeReason = this.handleChangeReason.bind(this);
        this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
       
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ models: data.models });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.models;
        console.log(data);
        console.log("hello")

        const servicesUrl = 'http://localhost:8080/api/services/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(servicesUrl, fetchConfig);
        if (response.ok) {
            const newservice = await response.json();
            console.log(newservice)
            console.log("HIHIHI")

            const cleared = {
                vin: '',
                customer_name: '',
                date: '',
                time: '',
                reason: '',
                technician: '',
                status: '',
            };
            this.setState(cleared);
        } else {
            console.error(response)
        }
    }

    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }

    handleChangeCustomerName(event) {
        const value = event.target.value;
        this.setState({ customer_name: value });
    }

    handleChangeDate(event) {
        const value = event.target.value;
        this.setState({ date: value });
    }

    handleChangeTime(event) {
        const value = event.target.value;
        this.setState({ time: value });
    }

    handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }
    handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }


    render() {
        return (
            <div className="row">
                <div className="ofset-3 col-6">
                    <div className="card shadow">
                        <h1>Create a service appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-service-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeVin} required placeholder="Manufacturer" type="text"
                                    id="manufacturer" name="manufacturer" className="form-control" value={this.state.manufacturer} />
                                <label htmlFor="manufacturer">Manufacturer</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeCustomerName} required placeholder="Model Nam" type="text"
                                    id="model_name" name="model_name" className="form-control" value={this.state.model_name} />
                                <label htmlFor="model_name">Model Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeDate} required placeholder="Model Color" type="text"
                                    id="model_color" name="model_color" className="form-control" value={this.state.model_color} />
                                <label htmlFor="model_color">Model Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeTime} required placeholder="Picture Url" type="text"
                                    id="picture_url" name="picture_url" className="form-control" value={this.state.picture_url} />
                                <label htmlFor="picture_url">Picture Url</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeReason} required placeholder="Picture Url" type="text"
                                    id="picture_url" name="picture_url" className="form-control" value={this.state.picture_url} />
                                <label htmlFor="picture_url">Picture Url</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeTechnician} required id="technician" name="technician" className="form-select" value={this.state.technician}>
                                    <option value="">Choose a technician</option>
                                    {this.state.technician.map(technician => {
                                        return (
                                            <option key={technician.id} value={technician.id}>
                                                {technician.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoesForm;