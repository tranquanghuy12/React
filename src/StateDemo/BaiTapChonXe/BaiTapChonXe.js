import React, { Component } from "react";

/*
  Các bước thực hiện 1 task hay 1 chức năng trong react:
  B1: Xây dựng giao diện cho ứng dụng
  B2: Xác định dữ liệu thay đổi trên giao diện
  B3: Xử lý làm thay đổi state từ các event
*/

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg",
  };

  changeColor = (color) => {
    this.setState({
      imgSrc: `./img/products/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} />
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("black");
                  }}
                  style={{ color: "black" }}
                >
                  Black car
                </button>
              </div>

              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("steel");
                  }}
                  style={{ color: "grey" }}
                >
                  Steel car
                </button>
              </div>

              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("silver");
                  }}
                  style={{ color: "silver" }}
                >
                  Silver car
                </button>
              </div>

              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("red");
                  }}
                  style={{ color: "red" }}
                >
                  Red car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
