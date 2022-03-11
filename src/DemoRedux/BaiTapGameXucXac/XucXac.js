import React, { Component } from "react";

import { connect } from "react-redux";
class XucXac extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 text-right">
          <button
            className="bg-danger btn"
            onClick={() => {
              //Tạo ra 1 action đưa lên redux
              const action = {
                type: "DAT_CUOC",
                banChon: true,
              };
              //Dùng this.props.dispatch đưa action lên redux
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px" }}
            >
              TÀI
            </div>
          </button>
        </div>
        <div className="col-4 text-center">
          {this.props.mangXucXac.map((xx, index) => {
            return <img key={index} src={xx.img} width={50} height={50} />;
          })}
        </div>
        <div className="col-4 text-left">
          <button
            className="bg-danger btn"
            onClick={() => {
              const action = {
                type: "DAT_CUOC",
                banChon: false,
              };
              //Dùng this.props.dispatch đưa action lên redux
              this.props.dispatch(action);
            }}
          >
            <div
              className="display-4 text-white p-5"
              style={{ borderRadius: "10px" }}
            >
              XỈU
            </div>
          </button>
        </div>
      </div>
    );
  }
}

//Viết hàm mapStateToProps để lấy dữ liệu mangXucXac về component
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
