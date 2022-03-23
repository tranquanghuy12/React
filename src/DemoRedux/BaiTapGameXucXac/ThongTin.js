import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:{" "}
          <span className="text-danger">
            {this.props.banChon ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          BÀN THẮNG:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.baiTapGameXucXacReducer.banChon,
    soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
    tongSoBanChoi: rootReducer.baiTapGameXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTin);
