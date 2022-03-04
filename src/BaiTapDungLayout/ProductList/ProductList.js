import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">BEST SMARTPHONE</h3>
        <div className="row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    );
  }
}
