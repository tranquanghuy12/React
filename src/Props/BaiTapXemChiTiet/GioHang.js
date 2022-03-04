import React, { Component } from "react";

//Kết nối redux
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>

        <tbody>
          {this.props.gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>
                  <img src={spGH.hinhAnh} width={50} height={50} />
                </td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps)(GioHang);
