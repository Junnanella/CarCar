import React from 'react';

class ServiceHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            services: [],
        };
        this.handleVinChange = this.handleVinChange.bind(this)
        this.onSearch = this.onSearch.bind(this)
        console.log("🚨🚨🚨 ")
    }

    handleVinChange(event) {
        const value = event.target.value
        this.setState({ vin: value })
    }

    async onSearch(event) {
        event.preventDefault();
        const data = { ...this.state };
        console.log("hello", data);
        const servicesUrl = `http://localhost:8080/api/services/${data.vin}`;
        const fetchConfig = {
            method: 'get',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(servicesUrl, fetchConfig)
        if (response.ok) {
            const results = await response.json();
            console.log(results)
            console.log("🚨🚨🚨 ")
            this.setState({ services: results });
        }
    }

    render() {
        return (
            <>
                <p></p>
                <div>
                    <div className='input-group'>
                        <form onSubmit={this.onSearch} id="search-bar" className='search-bar'>
                            <input value={this.state.vin} onChange={this.handleVinChange}
                                placeholder="Enter VIN " name="vin" required type="search"
                                id="search" className="form-control rounded" />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <p></p>
                <div className='appointment-list'>
                    <h2>Service History</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.services.map(service => {
                                return (
                                    <tr key={service.id}>
                                        <td>{service.vin}</td>
                                        <td>{service.customer_name}</td>
                                        <td>{service.date.split("T")[0]}</td>
                                        <td>{service.time.split("T")[1].slice(0, 5)}</td>
                                        <td>{service.technician.name}</td>
                                        <td>{service.reason}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}

export default ServiceHistory; 