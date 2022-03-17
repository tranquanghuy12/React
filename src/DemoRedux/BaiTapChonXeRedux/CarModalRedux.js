import React, { Component } from "react";
import { connect } from "react-redux";

class CarModalRedux extends Component {
  render() {
    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {this.props.carDetailReducer.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={this.props.carDetailReducer.img}
                  width={400}
                  height={250}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Hàm chuyển đổi state từ redux biến đổi thành props của component
const mapStateToProps = (rootReducer) => {
  return {
    carDetailReducer: rootReducer.carDetailReducer,
  };
};

export default connect(mapStateToProps)(CarModalRedux);
