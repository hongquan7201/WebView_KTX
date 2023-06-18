import { Form, Input, Row, Col, Button, notification } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import Notification from "../../../utils/Notification";
import { ChangePassword } from "../../../services/UserService";
const ThayDoiMatKhau = () => {
    const { user, token } = useContext(UserContext);
    const [password, setPassword] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const [passwordNewRepeat, setPasswordNewRepeat] = useState();
    const [api, contextHolder] = notification.useNotification();
    const onClick = () => {
        if (!password || !passwordNew || !passwordNewRepeat) {
            Notification(api, "error", "Vui lòng điền đầy đủ các thông tin");
        }
        else {
            if (passwordNew !== passwordNewRepeat) {
                Notification(api, "error", "Mật khẩu mới không trùng nhau!");
            }
            else {
                if (password === passwordNew) {
                    Notification(api, "error", "Mật khẩu mới không đươc trùng mật khẩu cũ!");
                } else {
                    var data = {
                        "idUser": user.id,
                        "oldPassword": password,
                        "newPassword": passwordNew
                    };
                    const handle = async () => {
                        var result = await ChangePassword(data, token);
                        if (result.status === 200) {
                            Notification(api, "success", result.message)
                            setPassword('');
                            setPasswordNew('');
                            setPasswordNewRepeat('');
                        } else {
                            Notification(api, "error", result.message);
                        }
                    }
                    handle();
                }
            }
        }

    }
    return (
        <>
            {contextHolder}
            <Form>
                <Row gutter={16}>
                    <Col span={12} offset={6}>
                        <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu hiện tại..." style={{ marginBottom: "10px" }} />
                        <Input.Password onChange={(e) => setPasswordNew(e.target.value)} placeholder="Nhập mật khẩu mới..." style={{ marginBottom: "10px" }} />
                        <Input.Password onChange={(e) => setPasswordNewRepeat(e.target.value)} placeholder="Nhập lại mật khẩu mới..." style={{ marginBottom: "10px" }} />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12} offset={6}>
                        <Button type="primary" block color="yellow-4" onClick={() => onClick()} >Lưu</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default ThayDoiMatKhau;