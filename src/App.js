import React, { Component } from "react";
import TestConatiner from "./container/TestConatiner";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <TestConatiner />
      </div>
    );
  }
}
