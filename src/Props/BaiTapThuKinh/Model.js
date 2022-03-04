import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let { spModel } = this.props;
    return (
      <div className="row justify-content-center mt-5">
        {/* <div className="card">
          
          <div className="card-img-overlay">
            <h4 className="card-title">{spModel.name}</h4>
            <p className="card-text">{spModel.desc}</p>
          </div>
        </div> */}

        <div
          style={{ backgroundImage: "url('./img/glassesImage/model.jpg')" }}
          className="model card"
        >
          <div className="card-img-overlay">
            <h5 className="card-title mb-2">{spModel.name}</h5>
            <p className="card-text text-white">{spModel.desc}</p>
          </div>
          <div className="text-center glass">
            <img src={spModel.url} width="55%" />
          </div>
        </div>

        {/* <img src="./img/glassesImage/model.jpg" className="model" width={250} /> */}
        <img src="./img/glassesImage/model.jpg" width={250} />
      </div>
    );
  }
}
