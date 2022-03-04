import React, { Component } from "react";
import "./style.css";
import style from "./Style.module.css";

export default class StyleComponent extends Component {
  render() {
    const styleObject = {
      backgroundColor: "black",
      color: "green",
    };

    return (
      <div>
        <p className="pColorRed">Hello Red</p>
        
        <p className={style.pColorGreen}>Hello green</p>
        <p className={style.pColorBlue}>Hello blue</p>

        <p className={styleObject}>qwdqwdqwd</p>
      </div>
    );
  }
}
