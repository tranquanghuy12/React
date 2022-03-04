import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "Iphone X",
      price: 1000,
      img: "https://picsum.photos/id/1/200",
    },
    {
      id: 2,
      name: "Iphone XS",
      price: 2000,
      img: "https://picsum.photos/id/2/200",
    },
    {
      id: 3,
      name: "Iphone XS Max",
      price: 3000,
      img: "https://picsum.photos/id/3/200",
    },
  ];

  renderProduct = () => {
    // let arrTagProduct = [];
    // for (let prod of this.arrProduct) {
    //   let obTrJSX = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} width={50} />
    //       </td>
    //     </tr>
    //   );

    //   arrTagProduct.push(obTrJSX);
    // }
    // return arrTagProduct;
    let arrTagJSX = this.arrProduct.map((product, index) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} width={50} alt="..." />
          </td>
        </tr>
      );
    });
    return arrTagJSX;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
