import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại

    console.log("getDerivedStateFromProps");
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    //shouldComponentUpdate: quyết định render hoặc không render lại component
    console.log("shouldComponentUpdate");
    return false;
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Number: {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h3>Child component</h3>
        <ChildComponent />
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
