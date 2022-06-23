import React, { useEffect, useState } from "react";

function ServiceAppointmentList() {
    let [appointments, setAppointment] = useState([]);

    async function fectchAppointment() {
        const res = await fetch('http://localhost:8080/api/services/');
        const newAppointment = await res.json();
        setAppointment(newAppointment.appointment)
    }
    useEffect(() => {
        fectchAppointment()
    }, [])

    // let convertDate = new Date()

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
                    {appointments.map((appointment) => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin.vin}</td>
                                <td>{appointment.customer_name}</td>
                                <td>{appointment.date.split("T")[0]}</td>
                                <td>{appointment.time.split("T")[1].slice(0, 5)}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )

}

export default ServiceAppointmentList;