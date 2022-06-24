import { NavLink } from "react-router-dom";

// 🚨🚨🚨 Add link for sales history

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="manufacturers/"
                >
                  Manufacturers
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="manufacturers/new/"
                >
                  Add Manufacturer
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="vehicles/"
                >
                  Vehicle Models
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="vehicles/new/"
                >
                  Add Vehicle Model
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="automobiles/"
                >
                  Automobiles
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="automobiles/new/"
                >
                  Add Automobile
                </NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="salesperson/new"
                >
                  Add Sales Person
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="customer/new/"
                >
                  Add Customer
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="sales_record/new"
                >
                  Create Sales Record
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="sales_record/list"
                >
                  Sales History List
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="sales_record/history"
                >
                  Sales Person History
                </NavLink>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="technicians/new"
                >
                  Add a Technician
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="service_appointments/new/"
                >
                  Create a Sevice Appointment
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="service_appointments/"
                >
                  Service Appointments
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-current="page"
                  to="service_history/"
                >
                  Service History
                </NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
