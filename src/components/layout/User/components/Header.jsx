import { useContext } from "react";
import { Row, Col, Badge, Dropdown, Input, Alert } from "antd";

import { SearchOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";

const bell = [
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
            fill="#111827"
        ></path>
        <path
            d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
            fill="#111827"
        ></path>
    </svg>,
];
const items = [
    {
        label: (
            <h1 style={{ fontSize: "18px", fontWeight: "700" }}>Thông báo</h1>
        ),
        key: "0",
    },
    {
        label: (
            <Alert description="Vui lòng thanh toán biên lai!" type="error" />
        ),
        key: "1",
    },
    {
        label: (
            <Alert description="Vui lòng thanh toán hoá đơn!" type="error" />
        ),
        key: "2",
    },
];

const profile = [
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
            fill="#111827"
        ></path>
    </svg>,
];

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <Row gutter={[24, 0]}>
            <Col span={24} md={24} className="header-control">
                <Link
                    to="/profile"
                    className="btn-sign-in"
                    style={{ margin: "0 10px" }}
                >
                    {profile}
                    <span>{user?.name ? user?.name : ""}</span>
                </Link>
                <Badge size="small" count={2}>
                    <Dropdown
                        placement="bottomRight"
                        menu={{
                            items,
                        }}
                        trigger={["click"]}
                    >
                        <a
                            href="#pablo"
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                        >
                            {bell}
                        </a>
                    </Dropdown>
                </Badge>
                <Input
                    className="header-search"
                    placeholder="Bạn muốn tìm gì ?"
                    prefix={<SearchOutlined />}
                />
            </Col>
        </Row>
    );
};

export default Header;
