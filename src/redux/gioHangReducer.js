const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone",
    //   giaBan: 1000,
    //   soLuong: 3,
    //   hinhAnh: "https://picsum.photos/200",
    // },
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // console.log("action", action); //khi log ra thì trong sanPham ban đầu chưa có thuộc tính soLuong

      let gioHang = [...state.gioHang];
      //Từ action giỏ hàng tạo ra object spGioHang
      let spGioHang = { ...action.sanPham, soLuong: 1 };

      //kiểm tra sp đó đã có trong giỏ hàng hay chưa
      let sp = gioHang.find((sanPham) => sanPham.maSP === spGioHang.maSP);
      if (sp) {
        // Nếu sản phẩm dispatch lên có trong giỏ hàng rồi => tăng số lượng
        sp.soLuong += 1;
      } else {
        //Nếu sản phẩm dispatch lên chưa có trong giỏ hàng => thêm vào giỏ hàng
        gioHang.push(spGioHang);
      }

      state.gioHang = gioHang;

      console.log("giỏ hàng", state.gioHang);
      return { ...state };
    }
    default:
      return state;
  }
};
