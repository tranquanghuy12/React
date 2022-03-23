import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import ThongTin from "./ThongTin";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className="game"
        style={{ backgroundImage: "url('./img/gameXucXac/bgGame.png')" }}
      >
        <h1 className="title text-center mt-5">GAME ĐỔ XÚC XẮC</h1>

        <div className="row text-center">
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              TÀI
            </button>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center">
            <XucXac />
          </div>

          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              XỈU
            </button>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <ThongTin />
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success mt-5 p-2 display-4"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (banChon) => {
      let action = {
        type: "DAT_CUOC",
        banChon,
      };
      dispatch(action);
    },

    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
