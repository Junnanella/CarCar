import React, { useEffect, useState } from "react";

function ServiceAppointmentList() {
    let [services, setAppointment] = useState([]);

    
    useEffect(() => {
        async function fectchAppointment() {
            const response = await fetch('http://localhost:8080/api/services/');
            if (response.ok){
                const newAppointment = await response.json();
                setAppointment(newAppointment.services)
            }
        }
        fectchAppointment()
    }, [])

    console.log(services)


    // function cancel(service){
    //     const url = `http://localhost:8080/api/services/${service.vin}`;
    
    //     const fectchConfig = 

    // }


    return (
        <>
            <h1> Service appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                        {/* <th>VIP</th> */}
                    </tr>
                </thead>
                <tbody>
                    {services.filter(service => service.status.id === 1).map((service) => {
                        return (
                            <tr key={service.id}>
                                <td>{service.vin}</td>
                                <td>{service.customer_name}</td>
                                <td>{service.date.split("T")[0]}</td>
                                <td>{service.time.split("T")[1].slice(0, 5)}</td>
                                <td>{service.technician.name}</td>
                                <td>{service.reason}</td>
                                <td>
                                    <button onClick = {() =>services.cancel(service) } className = "btn btn-danger"> Cancel</button>
                                    <button onClick = {() =>services.finish(service) } className = "btn btn-success"> Finish</button>
                                </td>
                                {/* <td>{service.status}</td>
                                <td>{service.vip}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceAppointmentList; 