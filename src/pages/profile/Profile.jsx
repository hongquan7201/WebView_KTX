import { useContext } from "react";

import { Row, Col, Card, Avatar, Tabs } from "antd";

import BgProfile from "../../assets/images/bg-profile.jpg";
import ThongTinCaNhan from "./components/ThongTinCaNhan";
import ThongTinThanNhan from "./components/ThongTinThanNhan";
import ThongTinXe from "./components/ThongTinXe";
import ThayDoiMatKhau from "./components/ThayDoiMatKhau";
import { UserContext } from "../../contexts/UserContext";
const Profile = () => {
    const { user } = useContext(UserContext);
    const items = [
        {
            key: "1",
            label: `Thông tin cá nhân`,
            children: <ThongTinCaNhan />,
        },
        {
            key: "2",
            label: `Thông tin thân nhân`,
            children: <ThongTinThanNhan />,
        },
        {
            key: "3",
            label: `Thông tin xe`,
            children: <ThongTinXe />,
        },
        {
            key: "4",
            label: `Thay đổi mật khẩu`,
            children: <ThayDoiMatKhau />,
        },
    ];
    return (
        <>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + BgProfile + ")" }}
            ></div>

            <Card
                className="card-profile-head"
                bodyStyle={{ display: "none" }}
                title={
                    <Row
                        justify="space-between"
                        align="middle"
                        gutter={[24, 0]}
                    >
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <div className="avatar-info">
                                    <h4 className="font-semibold m-0">
                                        {user?.name
                                            ? user.name
                                            : user?.email
                                            ? user.email
                                            : ""}
                                    </h4>
                                    <p>Sinh viên</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                    </Row>
                }
            ></Card>

            <Row gutter={[24, 0]}>
                <Col span={24}>
                    <Card>
                        <Tabs defaultActiveKey="1" items={items} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Profile;
