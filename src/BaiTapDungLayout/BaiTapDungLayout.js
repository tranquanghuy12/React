import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import Sider from "./Sider/Sider";
import "./css/style.css";

export default class BaiTapDungLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
