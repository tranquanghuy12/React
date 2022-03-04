import React, { Component } from "react";
import CarList from "./CarList";
import Modal from "./Modal";

export default class ExerciseCarStore extends Component {
  state = {
    sanPhamChiTiet: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  //Đặt state tại đâu thì viết hàm setState tại đó
  xemChiTiet = (carItem) => {
    this.setState({
      sanPhamChiTiet: carItem,
    });
  };
  render() {
    return (
      <div className="contaienr">
        <h3>Bài tập truyền props</h3>
        <Modal spModal={this.state.sanPhamChiTiet} />
        <CarList productsData={this.products} xemChiTiet={this.xemChiTiet} />
      </div>
    );
  }
}
