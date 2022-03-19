import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class TableDanhSachNguoiDung extends Component {
  state = {
    sortBy: "taiKhoan",
  };

  handleSort = (name) => {
    this.setState({
      sortBy: name,
    });
  };
  render() {
    let { mangNguoiDung } = this.props;
    mangNguoiDung = _.sortBy(mangNguoiDung, [this.state.sortBy]);
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSort("taiKhoan");
                }}
              >
                Tài khoản
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSort("hoTen");
                }}
              >
                Họ tên
              </th>
              <th>Mật khẩu</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSort("email");
                }}
              >
                Email
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSort("soDienThoai");
                }}
              >
                Số điện thoại
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.handleSort("loaiNguoiDung");
                }}
              >
                Loại người dùng
              </th>
            </tr>
          </thead>
          <tbody>
            {mangNguoiDung.map((nguoiDung, index) => {
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
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const action = {
                          type: "XOA_NGUOI_DUNG",
                          taiKhoan: nguoiDung.taiKhoan,
                        };
                        //Gửi dữ liệu lên redux
                        this.props.dispatch(action);
                      }}
                    >
                      Xóa
                    </button>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => {
                        const action = {
                          type: "SUA_NGUOI_DUNG",
                          nguoiDung: nguoiDung,
                        };
                        //Gửi dữ liệu lên redux
                        this.props.dispatch(action);
                      }}
                    >
                      Chỉnh sửa
                    </button>
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
