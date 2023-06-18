import {
    Form,
    Input,
    Row,
    Col,
    Select,
    DatePicker,
    Button,
    notification,
} from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import dayjs from "dayjs";
import { GetAllQuanHe } from "../../../services/QuanHeService";
import Notification from "../../../utils/Notification";
import {
    AddThanNhanService,
    EditThanNhanService,
    GetThanNhanSinhVien,
} from "../../../services/ThanNhanServices";

const ThongTinThanNhan = () => {
    const { user, token } = useContext(UserContext);
    const [quanhes, setQuanHes] = useState();
    const [thannhan, setThanNhan] = useState();
    const [gender, setGender] = useState();
    const [quanhe, setQuanHe] = useState();
    const [birthday, setBirthday] = useState();
    const [api, contextHolder] = notification.useNotification();
    useEffect(() => {
        const handle = async () => {
            const result = await GetThanNhanSinhVien(user.id, token);
            if (result.status === 200) {
                const _thannhan = result.data[0];
                setThanNhan(_thannhan);
                setGender(_thannhan?.gender);
                setBirthday(_thannhan.birthday ? _thannhan.birthday : new Date().toLocaleDateString());
                setQuanHe(_thannhan?.idQuanHe);
            } else {
                Notification(api, "error", result.message);
            }
        };
        handle();
    }, []);
    useEffect(() => {
        const handle = async () => {
            const result1 = await GetAllQuanHe(token);
            if (result1.status === 200) {
                const items = result1.data;
                if (items.length > 0) {
                    let array = [];
                    items.forEach((item) => {
                        let itemNew = {
                            key: item.id,
                            value: item.id,
                            label: item.name,
                        };
                        array.push(itemNew);
                    });
                    setQuanHes(array);
                }
            } else {
                Notification(api, "error", result1.message);
            }
        };
        handle();
    }, []);
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setThanNhan({ ...thannhan, [name]: value });
    };
    const onClick = () => {
        var input = thannhan ? thannhan : {};
        input.idQuanHe = quanhe;
        input.gender = gender;
        input.birthday = birthday;
        const handle = async () => {
            if (input.id === undefined) {
                input.idUser = user.id;
                const result = await AddThanNhanService(input, token);
                if (result.status === 200) {
                    Notification(api, "success", result.message);
                } else {
                    Notification(api, "error", result.message);
                }
            } else {
                const result = await EditThanNhanService(input, token);
                if (result.status === 200) {
                    Notification(api, "success", result.message);
                } else {
                    Notification(api, "error", result.message);
                }
            }
        };
        handle();
    };
    return (
        <>
            {contextHolder}
            <Form>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Họ và tên">
                            <Input
                                name="name"
                                onChange={handleChange}
                                value={thannhan?.name ? thannhan.name : ""}
                                placeholder="Nhập họ và tên..."
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Số điện thoại">
                            <Input
                                name="sdt"
                                onChange={handleChange}
                                value={thannhan?.sdt ? thannhan.sdt : ""}
                                placeholder="Nhập số điện thoại..."
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Địa chỉ">
                            <Input
                                name="address"
                                onChange={handleChange}
                                value={
                                    thannhan?.address ? thannhan.address : ""
                                }
                                placeholder="Nhập địa chỉ..."
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Quan hệ">
                            <Select
                                showSearch
                                name="idQuanHe"
                                value={quanhe}
                                onChange={(value) => setQuanHe(value)}
                                placeholder="Chọn quan hệ"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={quanhes}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Giới tính">
                            <Select
                                showSearch
                                name="gender"
                                value={gender}
                                onChange={(value) => setGender(value)}
                                placeholder="Chọn giới tính"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: true,
                                        label: "Nam",
                                    },
                                    {
                                        value: false,
                                        label: "Nữ",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Ngày sinh">
                            <DatePicker
                                name="birthday"
                                onChange={(date, dateString) =>
                                    setBirthday(dateString)
                                }
                                value={dayjs(birthday, "D/M/YYYY")}
                                format="D/M/YYYY"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12} offset={6}>
                        <Button type="primary" block onClick={() => onClick()}>
                            Lưu
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
export default ThongTinThanNhan;
