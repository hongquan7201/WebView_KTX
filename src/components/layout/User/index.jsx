import "../../../assets/styles/main.css";
import "../../../assets/styles/responsive.css";
import { useState } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Statistical from "../../../pages/statistical/Statistical";
import Tables from "../../../pages/room/ThongTinPhong";
import Billing from "../../../pages/payment/Payment";
import Profile from "../../../pages/profile/Profile";
import RegisterRoom from "../../../pages/registerRoom/RegisterRoom";
import Index from "../../../pages/index";
import Page404 from "../../../pages/errors/404";
import Page500 from "../../../pages/errors/500";
import Page403 from "../../../pages/errors/403";
const { Header: AntHeader, Content, Sider } = Layout;

const Main = () => {
    const [visible, setVisible] = useState(false);
    const [sidenavColor, setSidenavColor] = useState("#1890ff");
    const [sidenavType, setSidenavType] = useState("transparent");
    const [fixed, setFixed] = useState(false);

    const openDrawer = () => setVisible(!visible);
    const handleSidenavType = (type) => setSidenavType(type);
    const handleSidenavColor = (color) => setSidenavColor(color);
    const handleFixedNavbar = (type) => setFixed(type);

    let { pathname } = useLocation();
    return (
        <Layout className={`layout-dashboard`}>
            <Drawer
                title={false}
                placement={"right"}
                closable={false}
                onClose={() => setVisible(false)}
                visible={visible}
                key={"right"}
                width={250}
                className={`drawer-sidebar `}
            >
                <Layout className={`layout-dashboard`}>
                    <Sider
                        trigger={null}
                        width={250}
                        theme="light"
                        className={`sider-primary ant-layout-sider-primary ${
                            sidenavType === "#fff" ? "active-route" : ""
                        }`}
                        style={{ background: sidenavType }}
                    >
                        <Sidenav color={sidenavColor} />
                    </Sider>
                </Layout>
            </Drawer>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                width={250}
                theme="light"
                className={`sider-primary ant-layout-sider-primary ${
                    sidenavType === "#fff" ? "active-route" : ""
                }`}
                style={{ background: sidenavType }}
            >
                <Sidenav color={sidenavColor} />
            </Sider>
            <Layout>
                {fixed ? (
                    <Affix>
                        <AntHeader
                            className={`${fixed ? "ant-header-fixed" : ""}`}
                        >
                            <Header
                                onPress={openDrawer}
                                name={pathname}
                                subName={pathname}
                                handleSidenavColor={handleSidenavColor}
                                handleSidenavType={handleSidenavType}
                                handleFixedNavbar={handleFixedNavbar}
                            />
                        </AntHeader>
                    </Affix>
                ) : (
                    <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
                        <Header
                            onPress={openDrawer}
                            name={pathname}
                            subName={pathname}
                            handleSidenavColor={handleSidenavColor}
                            handleSidenavType={handleSidenavType}
                            handleFixedNavbar={handleFixedNavbar}
                        />
                    </AntHeader>
                )}
                <Content className="content-ant">
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                        <Route
                            exact
                            path="/statistical"
                            element={<Statistical />}
                        />
                        <Route exact path="/tables" element={<Tables />} />
                        <Route
                            exact
                            path="/registerroom"
                            element={<RegisterRoom />}
                        />
                        <Route exact path="/billing" element={<Billing />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path="/500" element={<Page500 />} />
                        <Route exact path="/403" element={<Page403 />} />
                        <Route exact path="/404" element={<Page404 />} />
                        <Route exact path="/*" element={<Navigate to="/" />} />
                    </Routes>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

export default Main;
