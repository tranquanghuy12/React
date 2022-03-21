//rxreducer

import { CAP_NHAT_NGUOI_DUNG, SUA_NGUOI_DUNG, THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../types/baiTapQuanLyNguoiDungType";

const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "abc",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "09090909",
      email: "nguyenvana@gmail.com",
      matKhau: "123123123",
      loaiNguoiDung: "1",
    },
    {
      taiKhoan: "xyz",
      hoTen: "Trần Văn B",
      soDienThoai: "0101010101",
      email: "tranvanb@gmail.com",
      matKhau: "123123123",
      loaiNguoiDung: "2",
    },
  ],

  nguoiDungSua: {
    taiKhoan: "xyz",
    hoTen: "Trần Văn B",
    soDienThoai: "0101010101",
    email: "tranvanb@gmail.com",
    matKhau: "123123123",
    loaiNguoiDung: "2",
  },
};

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THEM_NGUOI_DUNG: {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

      return { ...state };
    }
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];

      mangNguoiDungUpdate = mangNguoiDungUpdate.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );

      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }

    case SUA_NGUOI_DUNG: {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case CAP_NHAT_NGUOI_DUNG:
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      let nguoiDungUpdate = mangNguoiDungUpdate.find(
        (nd) => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );
      if (nguoiDungUpdate) {
        // nguoiDungUpdate.hoTen = action.nguoiDungCapNhat;
        for (let key in nguoiDungUpdate) {
          nguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
        }
      }
      //setState mảng người dùng
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    default:
      return state;
  }
};
