import { THEM_NGUOI_DUNG } from "../types/baiTapQuanLyNguoiDungType"

export const themNguoiDungAction = (nguoiDung) =>{
  return {

    //Xử lý rất nhiều mới ra được object
    type: THEM_NGUOI_DUNG,
    nguoiDung
  }
}