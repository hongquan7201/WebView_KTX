import "../../../assets/styles/style.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import {
    Anchor,
    Space,
    Layout,
    BackTop,
    Card,
} from "antd";
import DoiNet from "./components/DoiNet";
import LienHe from "./components/LienHe";
import GioiThieu from "./components/GioiThieu";
import BangGia from "./components/BangGia";
const { Header, Footer, Content } = Layout;
const Main = () => {
    const { isDisplayLogin, isDisplayRegister, onShowLogin, onShowRegister } =
        useContext(UserContext);
    const onClickClose = () => {
        if (isDisplayLogin) {
            onShowLogin();
        }
        if (isDisplayRegister) {
            onShowRegister();
        }
    };
    return (
        <>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 48]}
            >
                <Layout>
                    <Header style={{ background: "#fff" }}>
                        <header className="header">
                            <h5 className="logo">KÝ TÚC XÁ SINH VIÊN ĐÀ NẴNG</h5>
                            <nav className="navigation">
                                <Anchor
                                    affix={false}
                                    direction="horizontal"
                                    items={[
                                        {
                                            key: "trangchu",
                                            href: "",
                                            title: "Trang chủ",
                                        },
                                        {
                                            key: "gioithieu",
                                            href: "#gioithieu",
                                            title: "Giới thiệu",
                                        },
                                        {
                                            key: "banggia",
                                            href: "#banggia",
                                            title: "Bảng giá",
                                        },
                                        {
                                            key: "lienhe",
                                            href: "#lienhe",
                                            title: "Liên hệ",
                                        },
                                    ]}
                                />
                                <button
                                    onClick={() => onShowLogin()}
                                    className="btnLogin-popup"
                                >
                                    Đăng nhập
                                </button>
                            </nav>
                        </header>
                    </Header>
                    <Content>
                        <Card id="trangchu">
                            <div className="main">
                                <div
                                    className={`wrapper ${isDisplayLogin ? "active-popup" : ""
                                        } ${isDisplayRegister ? "active" : ""}`}
                                >
                                    <span onClick={() => onClickClose()} className="icon-close">
                                        x
                                    </span>
                                    <Login />
                                    <Register />
                                </div>
                                {isDisplayLogin ? (
                                    <></>
                                ) : (
                                    <DoiNet />
                                )}
                            </div>
                        </Card>
                        <Card id="gioithieu" style={{ marginTop: "20px", margin: "0 10%" }}>
                            <div className="panel" >
                                <GioiThieu />
                            </div>
                        </Card>
                        <Card id="banggia" style={{ marginTop: "20px", margin: "0 10%" }}>
                            <div className="panel" >
                                <BangGia />
                            </div>
                        </Card>
                        <Card id="lienhe" style={{ marginTop: "20px", margin: "0 10%" }}>
                            <div className="panel" >
                                <LienHe />
                            </div>
                        </Card>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                    Copyright©2023 HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ TÍCH HỢP API
                    </Footer>
                </Layout>
            </Space>
            <BackTop />
        </>
    );
};
export default Main;
