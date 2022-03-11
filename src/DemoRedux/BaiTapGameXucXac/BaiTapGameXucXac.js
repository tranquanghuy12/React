import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import style from "./BaiTapGameXucXac.module.css";

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className={`${style.fontGame}`}
        style={{
          backgroundImage: "url('./img/gameXucXac/bgGame.png')",
          width: "98.9vw",
          height: "100vw",
        }}
      >
        <h3 className="text-center display-4">BÀI TẬP GAME XÚC XẮC</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
