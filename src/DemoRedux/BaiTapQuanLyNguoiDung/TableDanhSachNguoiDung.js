import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Mật khẩu</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Loại người dùng</th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>
                    {nguoiDung.loaiNguoiDung == "1" ? "Người dùng" : "Quản trị"}
                  </td>
                  <td>
                    <button className="btn btn-danger">Xóa</button>
                    <button className="btn btn-primary ml-2">Chỉnh sửa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => ({
  //binding dữ liệu từ baiTapQuanLyNguoiDungReducer về
  //Với mangNguoiDung là stateDefault
  mangNguoiDung: rootReducer.baiTapQuanLyNguoiDungReducer.mangNguoiDung,
});

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
