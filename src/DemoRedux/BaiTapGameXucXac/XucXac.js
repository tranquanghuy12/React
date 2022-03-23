import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img style={{ width: 35, height: 35 }} src={xucXac.img} alt="..." />
      );
    });
  };
  render() {
    return (
      <div>
        {this.renderXucXac()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
