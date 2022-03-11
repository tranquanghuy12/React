import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class GlassesList extends Component {
  renderProducts = () => {
    let { productsData, changeGlasses } = this.props;
    return productsData.map((item, index) => {
      return (
        <div className="d-inline-block ml-5" key={index}>
          <GlassItem item={item} changeGlasses={changeGlasses} />
        </div>
      );
    });
  };

  render() {
    return <div className="glasses-list container m-auto row bg-white">{this.renderProducts()}</div>;
  }
}
