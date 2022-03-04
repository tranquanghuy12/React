import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderProduct = () => {
    let { productsData } = this.props;
    return productsData.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem item={item} xemChiTiet={this.props.xemChiTiet} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
