import {
    Form,
    Row,
    Col,
    Select,
    DatePicker,
    Button,
    notification,
    Card,
    Checkbox,
    Divider,
} from "antd";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserContext } from "../../contexts/UserContext";
import { AddSinhVienService, GetAllRoom } from "../../services/RoomService";
import Notification from "../../utils/Notification";
import { AddBienLaiService } from "../../services/Payment";
const RegisterRoom = () => {
    const [api, contextHolder] = notification.useNotification();
    const { token, user } = useContext(UserContext);
    const [rooms, setRooms] = useState();
    const [idRoom, setIdRoom] = useState();
    const [room, setRoom] = useState();
    const [dayStart, setDayStart] = useState(new Date().toLocaleDateString());
    const [dayEnd, setDayEnd] = useState(new Date().toLocaleDateString());
    const [hopdong, setHopDong] = useState({});
    useEffect(() => {
        const handle = async () => {
            const result = await GetAllRoom(token);
            if (result.status === 200) {
                const items = result.data;
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
                Notification(api, "error", result.message);
            }
        };
        handle();
    }, []);
    const handleChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setHopDong({ ...hopdong, [name]: value });
    };
    const onChange = (value) => {
        setIdRoom(value);
        var _room = rooms.filter((item) => item.key === value)[0];
        if (_room) {
            setRoom(_room);
        }
    };
    const onClick = () => {
        if (!user.id || !idRoom) {
            Notification(api, "error", "Vui lòng chọn phòng!");
        } else {
            var registerRoom = {
                idSV: user.id,
                idPhong: idRoom,
            };
            const handle = async () => {
                const result = await AddSinhVienService(registerRoom, token);
                if (result.status === 200) {
                    Notification(api, "success", result.message);
                    var array = dayStart.split("/");
                    var array1 = dayEnd.split("/");

                    var bienlai = {
                        idSinhVien: user.id,

                        ngayBatDau: new Date(
                            `${array[2]}-${array[1]}-${parseInt(array[0]) + 1}`
                        ),
                        ngayHetHan: new Date(
                            `${array1[2]}-${array1[1]}-${parseInt(array1[0]) + 1
                            }`
                        ),
                    };
                    const data = {
                        bienlai,
                        type: hopdong.isXe ? 1 : 0
                    };
                    const result1 = await AddBienLaiService(data, token);
                    if (result1.status === 200) {
                        Notification(
                            api,
                            "success",
                            `${result1.message}. Vui lòng thanh toán.`
                        );
                    } else {
                        Notification(api, "error", result1.message);
                    }
                } else {
                    Notification(api, "error", result.message);
                }
            };
            handle();
        }
    };

    return (
        <>
            {contextHolder}

            <Row>
                <Col offset={8}>
                    <h1
                        style={{
                            fontWeight: "800",
                            fontSize: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        ĐĂNG KÍ PHÒNG CHO SINH VIÊN
                    </h1>
                </Col>
            </Row>
            <Card>
                <Form>
                    <Row style={{ marginTop: "10px" }} gutter={16}>
                        <Col span={12}>
                            <Card style={{ minHeight: "450px" }}>
                                <Divider orientation="center">
                                    <div className="title">Form đăng ký</div>
                                </Divider>
                                <Col span={24}>
                                    <Form.Item label="Phòng">
                                        <Select
                                            showSearch
                                            name="idPhong"
                                            defaultValue={idRoom}
                                            onChange={(value) =>
                                                onChange(value)
                                            }
                                            placeholder="Chọn phòng"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? "")
                                                    .toLowerCase()
                                                    .includes(
                                                        input.toLowerCase()
                                                    )
                                            }
                                            options={rooms}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Ngày bắt đầu">
                                        <DatePicker
                                            style={{
                                                width: "100%",
                                            }}
                                            name="ngayBatDau"
                                            onChange={(date, dateString) =>
                                                setDayStart(dateString)
                                            }
                                            value={dayjs(dayStart, "D/M/YYYY")}
                                            format="D/M/YYYY"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Ngày kết thúc">
                                        <DatePicker
                                            style={{
                                                width: "100%",
                                            }}
                                            name="ngayHetHan"
                                            onChange={(date, dateString) =>
                                                setDayEnd(dateString)
                                            }
                                            value={dayjs(dayEnd, "D/M/YYYY")}
                                            format="D/M/YYYY"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Checkbox
                                        name="isXe"
                                        onChange={handleChange}
                                    >
                                        Đăng ký xe
                                    </Checkbox>
                                </Col>
                                <Col span={24} style={{ marginTop: "50px" }}>
                                    <Button
                                        type="primary"
                                        block
                                        onClick={() => onClick()}
                                    >
                                        Đăng ký phòng
                                    </Button>
                                </Col>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card style={{ minHeight: "450px" }}>
                                <Divider orientation="center">
                                    <div className="title">Thông tin phòng</div>
                                </Divider>
                                <Row gutter={[24, 12]}>
                                    <Col span={24}>
                                        <Card bordered="false">
                                            Tên phòng: Phòng{" "}
                                            {room?.label ? room.label : ""}
                                        </Card>
                                    </Col>
                                    <Col span={24}>
                                        <Card bordered="false">
                                            Số lượng sinh viên ở:{" "}
                                            {room?.number}
                                        </Card>
                                    </Col>
                                    <Col span={24}>
                                        <Card bordered="false">
                                            Trạng thái:{" "}
                                            {room?.status
                                                ? room.status
                                                    ? "Còn trống"
                                                    : "Đã đầy"
                                                : ""}
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    );
};
export default RegisterRoom;
