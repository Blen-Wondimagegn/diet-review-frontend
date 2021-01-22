import React, { Component } from "react";
import { addDiet } from "../actions/addDiet"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class DietNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      height: "",
      diet_type: "",
      start_weight: "",
      lost_weight: "",
      duration: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDiet(this.state);
    this.props.history.push("/diets");
  };

  render() {
    return (
      <div class="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h3 className="center">ADD YOUR DIET </h3>
          <div className="input-field">
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <label htmlFor="age">Age</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="gender"
              id="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
            <label htmlFor="gender">Gender</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="height"
              id="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="diet_type"
              id="diet_type"
              value={this.state.diet_type}
              onChange={this.handleChange}
            />
            <label htmlFor="diet_type">Diet Type</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="start_weight"
              id="start_weight"
              value={this.state.start_weight}
              onChange={this.handleChange}
            />
            <label htmlFor="start_weight">Start Weight</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="lost_weight"
              id="lost_weight"
              value={this.state.lost_weight}
              onChange={this.handleChange}
            />
            <label htmlFor="lost_weight">Weight Lost</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="duration"
              id="duration"
              value={this.state.duration}
              onChange={this.handleChange}
            />
            <label htmlFor="duration">Duration</label>
          </div>

          <input type="submit" value="ADD TO THE LIST" className="btn" />
        </form>
        <div class="card-action">
          <Link to={"/diets"}>Back To the list</Link>
        </div>
      </div>
    );
  }
}
export default connect(null, { addDiet })(DietNew);
