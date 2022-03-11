import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    let { item, changeGlasses } = this.props;
    return (
      <div className="glass-item mt-2">
        <img
          src={item.url}
          width={100}
          onClick={() => {
            changeGlasses(item);
          }}
        />
      </div>
    );
  }
}
