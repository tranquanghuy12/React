import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;

    return (
      <div>
        <div className="card">
          <img src={product.image} />
          <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              className="text-white btn"
              style={{ backgroundColor: "black" }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
