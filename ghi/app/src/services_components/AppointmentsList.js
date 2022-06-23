import React, { useEffect, useState } from "react";

function ServiceAppointmentList() {
    let [services, setAppointment] = useState([]);

    async function fectchAppointment() {
        const res = await fetch('http://localhost:8080/api/services/');
        const newAppointment = await res.json();
        console.log(newAppointment)
        setAppointment(newAppointment.services)
    }
    useEffect(() => {
        fectchAppointment()
    }, [])

    // let convertDate = new Date()
console.log(services)
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
                        <th>VIN</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => {
                        return (
                            <tr key={service.id}>
                                <td>{service.vin}</td>
                                <td>{service.customer_name}</td>
                                <td>{service.date.split("T")[0]}</td>
                                <td>{service.time.split("T")[1].slice(0, 5)}</td>
                                <td>{service.technician.name}</td>
                                <td>{service.reason}</td>
                                <td>{service.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceAppointmentList;