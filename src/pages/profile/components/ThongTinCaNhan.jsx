import { Form, Input, Row, Col, Select, DatePicker, Button, notification } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import dayjs from "dayjs";
import { GetAllSchool } from "../../../services/SchoolService";
import { GetAllRoom } from "../../../services/RoomService";
import { EditUserService } from "../../../services/UserService";
import Notification from "../../../utils/Notification";
const ThongTinCaNhan = () => {
    const { user, onSetUser, token } = useContext(UserContext);
    const [schools, setSchools] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const [userHere, setUserHere] = useState(user);
    const [gender, setGender] = useState(user?.gender);
    const [school, setSchool] = useState(user?.idTruong);
    const [room, setRoom] = useState(user?.idPhong);
    const [birthDay, setBirthday] = useState(user?.birthDay ? user.birthDay : new Date().toLocaleDateString());
    useEffect(() => {
        const handle = async () => {
            const result = await GetAllSchool(token);
            if (result.status === 200) {
                const items = result.data;
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
                    setSchools(array);
                }
            } else {
                Notification(api, 'error', result.message);
            }
            const result1 = await GetAllRoom(token);
            if (result1.status === 200) {
                const items = result1.data;
                if (items.length > 0) {
                    let array = [];
                    items.forEach((item) => {
                        let itemNew = {
                            key: item.id,
                            value: item.id,
                            label: item.name,
                            number: item.quantityPeople,
                            status: item.status,
                        };
                        array.push(itemNew);
                    });
                    setRooms(array);
                }
            } else {
                Notification(api, 'error', result.message);
            }
        };
        handle();
    }, []);
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setUserHere({ ...userHere, [name]: value });
    };
    const onClick = () => {
        var input = userHere ? userHere : {};
        input.gender = gender;
        input.birthDay = birthDay;
        input.idPhong = room;
        input.idTruong = school;
        const handle = async () => {
            const result = await EditUserService(input, token);
            if (result.status === 200) {
                onSetUser(input);
                Notification(api, 'success', result.message)
            }
            else {
                Notification(api, 'error', result.message);
            }
        }
        handle();
    }
    return (
        <>
            {contextHolder}
            <Form>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Email">
                            <Input disabled name="email" value={userHere?.email ? userHere.email : ""} placeholder="Nhập email..." />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Mã sinh viên">
                            <Input name="maSv" onChange={handleChange} value={userHere?.maSv ? userHere.maSv : ""} placeholder="Nhập mã sinh viên..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Họ và tên">
                            <Input name="name" onChange={handleChange} value={userHere?.name ? userHere.name : ""} placeholder="Nhập họ và tên..." />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Căn cước công dân">
                            <Input name="cccd" onChange={handleChange} value={userHere?.cccd ? userHere.cccd : ""} placeholder="Nhập căn cước công dân..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Số điện thoại">
                            <Input name="sdt" onChange={handleChange} value={userHere?.sdt ? userHere.sdt : ""} placeholder="Nhập số điện thoại..." />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Địa chỉ">
                            <Input name="address" onChange={handleChange} value={userHere?.address ? userHere.address : ""} placeholder="Nhập địa chỉ..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item name={"gender"} label="Giới tính">
                            <Select
                                showSearch
                                name="gender"
                                defaultValue={gender}
                                onChange={(value) => setGender(value)}
                                placeholder="Chọn giới tính"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: true,
                                        label: 'Nam',
                                    },
                                    {
                                        value: false,
                                        label: 'Nữ',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Ngày sinh">
                            <DatePicker name="birthday" onChange={(date, dateString) => setBirthday(dateString)} value={dayjs(birthDay, "D/M/YYYY")} format="D/M/YYYY" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item name={"school"} label="Trường học">
                            <Select
                                name="idTruong"
                                defaultValue={school}
                                onChange={(value) => setSchool(value)}
                                placeholder="Chọn trường"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={schools}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name={"createAt"} label="Ngày tạo">
                            <DatePicker disabled defaultValue={dayjs(user?.createAt ? user.createAt : "", "YYYY-MM-DD")} format="DD/MM/YYYY" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item label="Phòng">
                            <Select
                                disabled
                                showSearch
                                name="idPhong"
                                defaultValue={room}
                                onChange={(value) => setRoom(value)}
                                placeholder="Chọn phòng"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={rooms}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12} offset={6}>
                        <Button type="primary" block onClick={() => onClick()}>Lưu</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default ThongTinCaNhan;