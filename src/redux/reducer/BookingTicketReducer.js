import { DAT_GHE, HUY_GHE } from "../types/BookingTicketType";

const stateDefault = {
  danhSachGheDangDat: [
    // {soGhe:'A1', gia:1000}
  ],
};

const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        //khi người dùng click ghê đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        //khi người dùng click ghế đang đặt chưa có trong mảng => push vào
        danhSachGheDangDatUpdate.push(action.ghe);
      }

      //cập nhật lại state => giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );

      if (index !== -1) {
        //khi người dùng click ghê đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BookingTicketReducer;
