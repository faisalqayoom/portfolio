import React, { Component } from "react";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      value: 100,
    };

    this.myValue = 50;
  }

  render() {
    return (
      <h3>
        This is {this.myValue} from a wrapper {this.state.value}
      </h3>
    );
  }
}

export default Wrapper;
