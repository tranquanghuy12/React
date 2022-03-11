import React, { Component } from "react";
import { connect } from "react-redux";
class FormDangKy extends Component {
  state = {
    value: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      loaiNguoiDung: "1", //Dữ liệu trường select bắt buộc phải có kể cả người dùng chưa chọn
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChangeInput = (event) => {
    let { name, value, type } = event.target;

    let newValues = { ...this.state.values };
    //Cập nhật values cho object values
    newValues[name] = value;

    let newErrors = { ...this.state.errors };
    let errorMess = "";
    if (value === "") {
      errorMess = name + " không được bỏ trống!";
    }
    if (type == "email") {
      let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.text(value)) {
        errorMess = name + " không dúng định dạng!";
      }
    }

    newErrors[name] = errorMess;

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); //Phương thức cản sự kiện reload của browser
    console.log("values", this.state.values);
    //Kiểm tra hợp lệ => cho submit
    let { values, errors } = this.state;
    //let valid = true;
    //Duyệt các giá trị của values
    for (let key in values) {
      if (values[key] === "") {
        alert("Thông tin chưa hợp lệ!");
        return;
      }
    }

    for (let key in errors) {
      if (errors[key] != "") {
        alert("Thong tin chưa hợp lệ!");
        return;
      }
    }

    //Khi thông tin form đã hợp lệ => Đưa dữ liệu lên redux
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };
    //Gửi dữ liệu lên reducer
    this.props.dispatch(action);
  };
  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
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
              <div className="text-danger">{this.state.errors.taiKhoan}</div>
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                className="form-control"
                name="matKhau"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.matKhau}</div>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.email}</div>
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
              <div className="text-danger">{this.state.errors.hoTen}</div>
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                className="form-control"
                name="soDienThoai"
                onChange={this.handleChangeInput}
              />
              <div className="text-danger">{this.state.errors.soDienThoai}</div>
            </div>
            <div className="form-group">
              <p>Loại người dùng</p>
              <select id="loaiNguoiDung" className="form-control">
                <option value="1">Người dùng</option>
                <option value="1">Quản trị</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect()(FormDangKy);
