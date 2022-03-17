import { combineReducers, createStore } from "redux";
import { baiTapGameXucXacReducer } from "./reducer/baiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./reducer/baiTapQuanLyNguoiDungReducer";
import BookingTicketReducer from "./reducer/BookingTicketReducer";
import { carDetailReducer } from "./reducer/carDetailReducer";
import { gioHangReducer } from "./reducer/gioHangReducer";
import { productDetailReducer } from "./reducer/productDetailReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
  baiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
  BookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
