import React, { useEffect, useState } from "react";

function ServiceAppointmentList() {
    let [services, setAppointment] = useState([]);

    useEffect(() => {
        async function fectchAppointment() {
            const response = await fetch('http://localhost:8080/api/services/');
            if (response.ok) {
                const newAppointment = await response.json();
                setAppointment(newAppointment.services)
            }
        }
        fectchAppointment()
    }, [])

    console.log(services)


    // function Cancel(service) {
    //     const url = `http://localhost:8080/api/services/${service.vin}/cancel`;
    //     const fectchConfig = {
    //         method: "put",
    //         body: JSON.stringify(service),
    //         headers: {
    //             'Content-Type':'application/json',
    //         }
    //     }
    //     const response = fetch(url,fectchConfig)
    //         console.log("hi",response)

    // }

    // function Finish(service) {
    //     const url = `http://localhost:8080/api/services/${service.vin}/finish`;
    //     const fectchConfig = {
    //         method: "put",
    //         body: JSON.stringify(service),
    //         headers: {
    //             'Content-Type':'application/json',
    //         }
    //     }
    //     const response = fetch(url,fectchConfig)
    //         console.log("hi",response)
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
                        <th>VIP</th>
                        {/* <th>Status</th> */}
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
                                <td>{(service.vip) ? "False" : "True"}</td>
                                {/* <td>
                                    <button onClick={() => Cancel(service)} className="btn btn-danger"> Cancel</button>
                                    <button onClick={() => Finish(service)} className="btn btn-success"> Finish</button>
                                </td> */}

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceAppointmentList; 
