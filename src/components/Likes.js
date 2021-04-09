import React, { Component } from "react";

class Likes extends Component {
  state = {
    count: 0,
  };

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  decrement = () => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementMe}> Likes: {this.state.count}</button>
        <button onClick={this.decrement}> disLikes: {this.state.count}</button>
      </div>
    );
  }
}

export default Likes;
