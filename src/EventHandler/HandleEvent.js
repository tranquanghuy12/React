import React, { Component } from "react";

export default class HandleEvent extends Component {
  showMess = function () {
    alert("Hello");
  };

  showInfo = function (name) {
    alert(name);
  };

  render() {
    const handleClick = function () {
      console.log(123);
    };

    return (
      <div className="container">
        <button id="btnShowMess" onClick={this.showMess}>
          Show Message
        </button>
        <button
          onClick={() => {
            this.showInfo("Huy");
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}
