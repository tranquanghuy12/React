import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    let { banChon, soBanThang, tongSoBanChoi } =
      this.props.baiTapGameXucXacReducer;
    return (
      <div className="text-center">
        <div>
          Bạn chọn:
          <span className="text-danger">{banChon ? "TÀI" : "XỈU"}</span>
        </div>
        <div>
          Số bàn thắng: <span className="text-danger">{soBanThang}</span>
        </div>
        <div>
          Tổng số bàn chơi: <span className="text-danger">{tongSoBanChoi}</span>
        </div>
        <button className="btn btn-success">
          <div className="p-2" style={{ fontSize: 25 }} onClick={()=>{
            const action = {
              type: 'PLAY_GAME',
            }
            //Gửi dữ liệu action lên redux
            this.props.dispatch(action);
          }}>
            Play game
          </div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
