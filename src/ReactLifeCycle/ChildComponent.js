import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại

    console.log("getDerivedStateFromProps child");
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render");
    return (
      <div>
        <p className="p-5 bg-dark text-white display-4">Child component</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
