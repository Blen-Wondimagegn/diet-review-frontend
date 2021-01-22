// import React from "react";
// import { connect } from "react-redux";
// import { editDiet } from "../actions/index";
// import { NavLink } from "react-router-dom";

// class DietEdit extends React.Component {
//   state = {
//     name: "",
//     age: "",
//     gender: "",
//     height: "",
//     diet_type: "",
//     start_weight: "",
//     lost_weight: "",
//     duration: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     //  debugger
//     event.preventDefault();
//     let diet = { ...this.state, id: this.props.diet };
//     // console.log(this.props.diet);
//     this.props.editDiet(diet);
//     this.setState({
//       name: "",
//       age: "",
//       gender: "",
//       height: "",
//       diet_type: "",
//       start_weight: "",
//       lost_weight: "",
//       duration: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div class="wrapper">
//           <form onSubmit={this.handleSubmit}>
//             <h3 className="center">Edit </h3>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="name">Name</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="age"
//                 id="age"
//                 value={this.state.age}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="age">Age</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="gender"
//                 id="gender"
//                 value={this.state.gender}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="gender">Gender</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="height"
//                 id="height"
//                 value={this.state.height}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="height">Height</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="diet_type"
//                 id="diet_type"
//                 value={this.state.diet_type}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="diet_type">Diet Type</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="start_weight"
//                 id="start_weight"
//                 value={this.state.start_weight}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="start_weight">Start Weight</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="lost_weight"
//                 id="lost_weight"
//                 value={this.state.lost_weight}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="lost_weight">Weight Lost</label>
//             </div>
//             <div className="input-field">
//               <input
//                 type="text"
//                 name="duration"
//                 id="duration"
//                 value={this.state.duration}
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="duration">Duration</label>
//             </div>

//             <input type="submit" value="Edit" className="btn" />
//           </form>
//           <div class="card-action">
//             <NavLink to={"/diets"}>Back To the list</NavLink>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(null, { editDiet })(DietEdit);
