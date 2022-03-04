import React, { Component } from "react";

export default class BaiTapTangGiamFont extends Component {
  state = {
    fontSize: 17,
  };

  tangGiamFont = (size) => {
    this.setState({
      fontSize: this.state.fontSize + size,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 style={{ fontSize: `${this.state.fontSize}px` }}>
          Bài tập tăng giảm font size
        </h3>
        <button
          onClick={() => this.tangGiamFont(1)}
          className="btn btn-outline-primary"
        >
          +
        </button>
        <button
          onClick={() => this.tangGiamFont(-1)}
          className="btn btn-outline-primary ml-2"
        >
          -
        </button>
      </div>
    );
  }
}
