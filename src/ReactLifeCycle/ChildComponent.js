import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
    this.timeOut = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại

    console.log("getDerivedStateFromProps child");
    return currentState;
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("shouldComponentUpdate");
  //   if (this.props.number === newProps) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    console.log("render child");
    return (
      <div className="container">
        <p className="p-5 bg-dark text-white display-4">Child component</p>
        <h3 className="text-danger">{this.props.object.number}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
    this.timeOut = setInterval(() => {
      console.log("123");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    //clear các hàm chạy ngầm hoặc các sự kiện addEventListener
    clearTimeout(this.timeOut);
  }
}
