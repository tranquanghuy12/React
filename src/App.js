import logo from "./logo.svg";
import "./App.css";
// import BaiTapDungLayout from "./BaiTapDungLayout/BaiTapDungLayout";
// import HandleEvent from "./EventHandler/HandleEvent";
// import LoginForm from "./EventHandler/LoginForm";
// import StyleComponent from "./StyleComponent/StyleComponent";
// import BaiTapChonXe from "./StateDemo/BaiTapChonXe/BaiTapChonXe";
// import BaiTapTangGiamFont from "./StateDemo/BaiTapTangGiamFont/BaiTapTangGiamFont";
// import RenderWithMap from "./RenderWithMap/RenderWithMap";
// import DemoProps from "./Props/DemoProps/DemoProps";
// import BaiTapQLSP from "./Props/BaiTapQLSP/BaiTapQLSP";
// import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
// import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";
import DemoPropsChildren from "./Props/DemoPropsChildren/DemoPropsChildren";
import BaiTapChonXeRedux from "./DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux";
import BaiTapThuKinh from "./Props/BaiTapThuKinh/BaiTapThuKinh";
import BaiTapGameXucXac from "./DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapQuanLyNguoiDung from "./DemoRedux/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";
import BookingTicket from "./DemoRedux/BookingTicket/BookingTicket";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";
import AxiosDemo from "./AxiosDemo/AxiosDemo";

// import { Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import HeaderHome from "./Components/HeaderHome/HeaderHome";
// import About from "./pages/About/About";
// import AdminIndex from "./pages/Admin/AdminIndex/AdminIndex";
// import Contact from "./pages/Contact/Contact";
// import Detail from "./pages/Detail/Detail";
// import Home from "./pages/Home/Home";
// import HookUseEffect from "./pages/HookReact/HookUseEffect/HookUseEffect";
// import HookUseState from "./pages/HookReact/HookUseState/HookUseState";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
    {/* <BaiTapDungLayout /> */}
    {/* <HandleEvent /> */}
    {/* <LoginForm /> */}
    {/* <StyleComponent /> */}
    {/* <BaiTapChonXe /> */}
    {/* <BaiTapTangGiamFont /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoProps /> */}
    {/* <BaiTapQLSP /> */}
    {/* <BaiTapXemChiTiet /> */}
    {/* <ExerciseCarStore /> */}
    {/* <BaiTapThuKinh /> */}
    {/* <DemoPropsChildren /> */}
    {/* <BaiTapChonXeRedux /> */}
    <BaiTapGameXucXac />

    {/* <BaiTapQuanLyNguoiDung /> */}

    {/* <BookingTicket /> */}
    {/* <ReactLifeCycle /> */}

    {/* <AxiosDemo/> */}
    </div>
    // <BrowserRouter>
    //   <HeaderHome />
    //   <Switch>
    //     <Route exact path={"/home"} component={Home} />
    //     <Route exact path={"/contact"} component={Contact} />
    //     <Route exact path={"/login"} component={Login} />
    //     <Route exact path={"/register"} component={Register} />
    //     <Route exact path={"/about"} component={About} />
    //     <Route exact path={"/detail/:id"} component={Detail} />
    //     <Route exact path={"/admin"} component={AdminIndex} />
    //     <Route exact path={"/hookusestate"} component={HookUseState} />
    //     <Route exact path={"/hookuseeffect"} component={HookUseEffect} />
    //     <Route exact path={"/"} component={Home} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
