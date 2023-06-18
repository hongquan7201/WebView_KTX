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
import {
    AddXeService,
    EditXeService,
    GetAllLoaiXe,
    GetXeSinhVien,
} from "../../../services/XeService";
import Notification from "../../../utils/Notification";
import { GetAllKhuGiuXe } from "../../../services/KhuService";
const ThongTinXe = () => {
    const { user, token } = useContext(UserContext);
    const [xe, setXe] = useState();
    const [loaixes, setLoaiXes] = useState();
    const [khus, setKhus] = useState();
    const [loaixe, setLoaiXe] = useState();
    const [khu, setKhu] = useState();
    const [createAt, setCreateAt] = useState(new Date().toLocaleDateString());
    const [api, contextHolder] = notification.useNotification();
    useEffect(() => {
        const handle = async () => {
            const result = await GetXeSinhVien(user.id, token);
            if (result.status === 200) {
                const _xe = result.data[0];
                setXe(_xe);
                setLoaiXe(_xe?.idLoaiXe);
                setKhu(_xe?.idKhu);
                setCreateAt(new Date(xe.createAt).toLocaleDateString());
            } else {
                Notification(api, "error", result.message);
            }
        };
        handle();
    }, []);
    useEffect(() => {
        const handle = async () => {
            const result1 = await GetAllLoaiXe(token);
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
                    setLoaiXes(array);
                }
            } else {
                Notification(api, "error", result1.message);
            }
        };
        handle();
    }, []);
    useEffect(() => {
        const handle = async () => {
            const result2 = await GetAllKhuGiuXe(token);
            if (result2.status === 200) {
                const items = result2.data;
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
                    setKhus(array);
                }
            } else {
                Notification(api, "error", result2.message);
            }
        };
        handle();
    }, []);
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setXe({ ...xe, [name]: value });
    };
    const onClick = () => {
        var input = xe;
        input.idLoaiXe = loaixe;
        let array = createAt.split("/");
        input.createAt = new Date(
            `${array[2]}-${array[1]}-${parseInt(array[0]) + 1}`
        );
        input.idKhu = khu;
        const handle = async () => {
            if (input.id !== undefined) {
                const result = await EditXeService(input, token);
                if (result.status === 200) {
                    Notification(api, "success", result.message);
                } else {
                    Notification(api, "error", result.message);
                }
            } else {
                input.idUser = user.id;
                const result = await AddXeService(input, token);
                if (result.status === 200) {
                    Notification(api, "success", result.message);
                } else {
                    Notification(api, "error", result.message);
                }
            }
        };
        handle();
    };
    const onChange = (dateString) => {
        setCreateAt(dateString);
    };
    return (
        <>
            {contextHolder}

            <Form>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Chủ xe">
                            <Input
                                name="name"
                                onChange={handleChange}
                                value={xe?.name ? xe.name : ""}
                                placeholder="Nhập tên chủ xe..."
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Loại xe">
                            <Select
                                name="idLoaiXe"
                                showSearch
                                onChange={(value) => setLoaiXe(value)}
                                value={loaixe ? loaixe : ""}
                                placeholder="Chọn loại xe"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={loaixes}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Biển số xe">
                            <Input
                                name="code"
                                onChange={handleChange}
                                value={xe?.code ? xe.code : ""}
                                placeholder="Nhập biển số xe..."
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Màu sắc xe">
                            <Input
                                name="color"
                                onChange={handleChange}
                                value={xe?.color ? xe.color : ""}
                                placeholder="Nhập màu sắc xe..."
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Ngày đăng ký">
                            <DatePicker
                                name="createAt"
                                onChange={(date, dateString) =>
                                    onChange(dateString)
                                }
                                value={dayjs(createAt, "D/M/YYYY")}
                                format={"D/M/YYYY"}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Khu xe">
                            <Select
                                name="idKhu"
                                showSearch
                                onChange={(value) => setKhu(value)}
                                value={khu ? khu : ""}
                                placeholder="Chọn khu giữ xe"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={khus}
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
export default ThongTinXe;
