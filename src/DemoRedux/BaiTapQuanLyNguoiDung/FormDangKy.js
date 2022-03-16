import React, { Component } from "react";

export default class FormDangKy extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDienThoai: "",
    loaiNguoiDung: "1", //Dữ liệu trường select bắt buộc phải có kể cả người dùng chưa chọn
  };

  handleChangeInput = (event) => {
    let { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <form className="card">
        <div className="card-header bg-dark text-white">
          <h3>Form đăng ký</h3>
        </div>
        <div className="row card-body">
          <div className="col-6">
            <div className="form-group">
              <p>Tài khoản</p>
              <input
                className="form-control"
                name="taiKhoan"
                onChange={this.handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                className="form-control"
                name="matKhau"
                onChange={this.handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                className="form-control"
                name="email"
                onChange={this.handleChangeInput}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Họ tên</p>
              <input
                className="form-control"
                name="hoTen"
                onChange={this.handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                className="form-control"
                name="soDienThoai"
                onChange={this.handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>Loại người dùng</p>
              <select
                id="loaiNguoiDung"
                className="form-control"
                onChange={this.handleChangeInput}
              >
                <option value="1">Người dùng</option>
                <option value="2">Quản trị</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-outline-success">
            Đăng ký
          </button>
          <button type="button" className="btn btn-outline-primary ml-2">
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}
