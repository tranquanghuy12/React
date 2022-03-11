import React, { Component } from "react";

export default class CarItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <img src={item.img} />
        <div className="card-body">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.xemChiTiet(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
