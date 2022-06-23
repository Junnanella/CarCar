import React from "react";
// import { createSalesRecord } from "./SalesAPI";
//  🚨🚨🚨 Complete Code to create working form  🚨🚨🚨

export default class SalesRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      automobile: "",
      automobiles:[],
      sales_person: "",
      sales_persons: [],
      customer: "",
      customers: [],
      price: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAutomobile = this.handleChangeAutomobile.bind(this);
    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }
  async componentDidMount() {
    Promise.all([
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8090/api/salesperson/'),
      fetch('http://localhost:8090/api/customers/')
    ])
    .then(
      ([automobile, sales_person, customers]) => {
        return Promise.all([
          automobile.json(),
          sales_person.json(),
          customers.json()
        ])
      }
    )
    .then(
      ([automobile, sales_persons, customers]) => {
        this.setState(automobile)
        this.setState(sales_persons)
        this.setState(customers)
      }
    )
  }
}

// const createSalesRecord = (props) => {
//   const [values, setValues] = useState({
//     automobile: "",
//     sales_person: "",
//     customer: "",
//     price: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       ...values,
//     };
//     await createSalesRecord(data);
//     setValues({
//       automobile: "",
//       sales_person: "",
//       customer: "",
//       price: "",
//     });
//   };

//   const handleChangeAutomobile = (event) => {
//     setValues({
//       ...values,
//       automobile: event.target.value,
//     });
//   };
//   const handleChangeSalesPerson = (event) => {
//     setValues({
//       ...values,
//       sales_person: event.target.value,
//     });
//   };
//   const handleChangeCustomer = (event) => {
//     setValues({
//       ...values,
//       customer: event.target.value,
//     });
//   };
//   const handleChangePrice = (event) => {
//     setValues({
//       ...values,
//       price: event.target.value,
//     });
//   };
  
//   return (
//     <div className="row">
//       <div className="offset-3 col-6">
//         <div className="shadow p-4 mt-4">
//           <h1>Create a sales record</h1>
//           <form onSubmit={handleSubmit}>
//           <select id='automobile-select' className='form-select'>
//             <div className="form-floating mb-3">
//                 onChange={handleChangeAutomobile}
//                 value={values.automobile}
//                 placeholder="Automobile"
//                 required
//                 type="text"
//                 name="automobile"
//                 id="automobile"
//                 className="form-control"
              
//               <label htmlFor="automobile">Automobile</label>
//           </select>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 onChange={handleChangeEmployeeNum}
//                 value={values.employee_num}
//                 placeholder="Employee Number"
//                 required
//                 type="text"
//                 name="employee_num"
//                 id="employee_num"
//                 className="form-control"
//               />
//               <label htmlFor="employee_num">Employee Number</label>
//             </div>
//             <button className="btn btn-primary">Add</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
//   //  🚨🚨🚨 I already added a working Route and NavLink  🚨🚨🚨
//   // render() {
//   //   return <h1>Test Sales Record Form</h1>;
//   // }
// }
