import { Menu } from "antd";
import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
function Sidenav(color) {
    const { onSetUser, onSetToken } = useContext(UserContext);
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");

    const tables = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={0}
        >
            <path
                d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
                fill={color}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
                fill={color}
            ></path>
        </svg>,
    ];

    const billing = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={1}
        >
            <path
                d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
                fill={color}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
                fill={color}
            ></path>
        </svg>,
    ];

    const profile = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={2}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                fill={color}
            ></path>
        </svg>,
    ];

    const signin = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            key={3}
            width="20"
            height="20"
            viewBox="0 0 512 512"
        >
            <path
                fill={color}
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
        </svg>,
    ];
    const statis = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            key={4}
            width="20"
            height="20"
            viewBox="0 0 640 512"
        >
            <path
                fill={color}
                d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"
            />
        </svg>,
    ];
    const logOut = () => {
        onSetUser();
        onSetToken();
        sessionStorage.clear();
        window.location = "http://localhost:5173/";
    };
    return (
        <>
            <div className="brand">
                <NavLink to="/" style={{ color: "#000" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: "800" }}>KTX</h1>
                </NavLink>
            </div>
            <hr />
            <Menu theme="light" mode="inline">
                <Menu.Item className="menu-item-header">Phòng</Menu.Item>
                <Menu.Item key="1">
                    <NavLink to="/tables">
                        <span
                            className="icon"
                            style={{
                                background: page === "tables" ? color : "",
                            }}
                        >
                            {tables}
                        </span>
                        <span className="label">Thông tin phòng</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/registerroom">
                        <span
                            className="icon"
                            style={{
                                background:
                                    page === "registerroom" ? color : "",
                            }}
                        >
                            <PlusOutlined color={color} />
                        </span>
                        <span className="label">Đăng ký phòng</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item-header">Thanh kê</Menu.Item>

                <Menu.Item key="4">
                    <NavLink to="/billing">
                        <span
                            className="icon"
                            style={{
                                background: page === "billing" ? color : "",
                            }}
                        >
                            {billing}
                        </span>
                        <span className="label">Thanh toán</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to="/statistical">
                        <span
                            className="icon"
                            style={{
                                background: page === "statistical" ? color : "",
                            }}
                        >
                            {statis}
                        </span>
                        <span className="label">Thống kê</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item-header">Tài khoản</Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/profile">
                        <span
                            className="icon"
                            style={{
                                background: page === "profile" ? color : "",
                            }}
                        >
                            {profile}
                        </span>
                        <span className="label">Thông tin cá nhân</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="6">
                    <NavLink to="/logout" onClick={() => logOut()}>
                        <span
                            className="icon"
                            style={{
                                background: page === "logout" ? color : "",
                            }}
                        >
                            {signin}
                        </span>
                        <span className="label">Đăng xuất</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default Sidenav;
