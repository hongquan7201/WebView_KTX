import {
    Row,
    Col,
    Card,
    Button,
    Image,
    Drawer,
    notification,
    Divider,
    Tour,
    Table,
} from "antd";
import image from "../../assets/images/qr.png";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import scanqr from "../../assets/images/scanqr.gif";
import { GetAllBienLai, GetAllHoaDon } from "../../services/Payment";
import Notification from "../../utils/Notification";
const Billing = () => {
    const { user, token } = useContext(UserContext);
    const [openHD, setOpenHD] = useState(false);
    const [open, setOpen] = useState(false);
    const [element, setElement] = useState();
    const [hoadons, setHoaDons] = useState();
    const [bienlais, setBienLais] = useState();
    const [api, contextHolder] = notification.useNotification();
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const steps = [
        {
            title: "Bước 1",
            description: "Mở ứng dụng Viettel Pay và quét mã thanh toán",
            placement: "rightBottom",
            cover: <img alt="qrcode.png" src={scanqr} height="320px" />,
            target: () => ref1.current,
        },
        {
            title: "Bước 2",
            description: "Click Copy để lấy nội dung thanh toán",
            target: () => ref2.current,
        },
        {
            title: "Bước 3",
            description: "Nhập số tiền và nội dung chuyển khoản.",
            placement: "right",
            target: null,
        },
        {
            title: "Bước 4",
            description: "Bấm thanh toán.",
            target: null,
        },
    ];
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    useEffect(() => {
        const handle = async () => {
            const result = await GetAllHoaDon(user.id, token);
            if (result.status === 200) {
                const items = result.data;
                if (items.length > 0) {
                    let array = [];
                    items.map((item, index) => {
                        let itemNew = {
                            key: index,
                            id: item.id,
                            idNhanVien: item?.idNhanVien,
                            idSinhVien: item?.idSinhVien,
                            idPhong: item?.idPhong,
                            total: item.total,
                            status: "Chưa thanh toán",
                        };
                        array.push(itemNew);
                    });
                    setHoaDons(array);
                }
            } else {
                //Notification(api, 'error', result.message)
            }
            const result1 = await GetAllBienLai(user.id, token);
            if (result1.status === 200) {
                const items = result1.data;
                if (items.length > 0) {
                    let array = [];
                    items.map((item, index) => {
                        let itemNew = {
                            key: index,
                            id: item.id,
                            idNhanVien: item?.idNhanVien,
                            idSinhVien: item?.idSinhVien,
                            tienphong: item.tienPhong,
                            tienxe: item.tienXe,
                            total: item.total,
                            status: "Chưa thanh toán",
                        };
                        array.push(itemNew);
                    });
                    setBienLais(array);
                }
            } else {
                //Notification(api, 'error', result.message)
            }
        };
        handle();
    }, []);
    const columns = [
        {
            title: "Mã hoá đơn",
            dataIndex: "id",
            key: "id",
            render: (text) => <p>{text.split("-")[0]}</p>,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, item) => {
                return (
                    <Button
                        type="primary"
                        onClick={() => {
                            showDrawer(item, "1");
                        }}
                    >
                        Chi tiết
                    </Button>
                );
            },
        },
    ];
    const _columns = [
        {
            title: "Mã biên lai",
            dataIndex: "id",
            key: "id",
            render: (text) => <p>{text.split("-")[0]}</p>,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, item) => {
                return (
                    <Button
                        type="primary"
                        onClick={() => {
                            showDrawer(item, "2");
                        }}
                    >
                        Chi tiết
                    </Button>
                );
            },
        },
    ];
    const showDrawer = (item, type) => {
        const _id = item.id;
        const id = _id.replaceAll('-', 'A');
        if (!user.cccd) {
            Notification(
                api,
                "error",
                "Vui lòng cập nhật thông tin trước khi thanh toán!"
            );
        } else {
            var _item = {
                id,
                type,
                total: item.total,
                comment:
                    type === "1"
                        ? `HDB${user?.cccd}B${id}`
                        : `BLB${user?.cccd}B${id}`,
            };
            setElement(_item);
            setOpen(true);
        }
    };
    const onClose = () => {
        setOpen(false);
    };
    const onClick = () => {
        navigator.clipboard.writeText(element.comment);
        Notification(api, "success", "Copy vào bộ nhớ tạm thành công!");
    };
    return (
        <>
            {contextHolder}
            <Row gutter={[24, 0]}>
                <Col xs={24} md={12}>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} className="mb-24">
                            <Card
                                className="header-solid h-full ant-card-p-0"
                                title={
                                    <>
                                        <Row
                                            gutter={[24, 0]}
                                            className="ant-row-flex ant-row-flex-middle"
                                        >
                                            <Col xs={24} md={24}>
                                                <h6
                                                    ref={ref1}
                                                    className="font-semibold m-0"
                                                >
                                                    QR Code
                                                </h6>
                                            </Col>
                                        </Row>
                                    </>
                                }
                            >
                                <Row gutter={[24, 0]}>
                                    <Col span={24} md={24}>
                                        <Image src={image} />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} md={12} className="mb-24">
                    <Card
                        bordered={false}
                        className="header-solid h-full ant-invoice-card"
                    >
                        <Row className="mb-24" style={{ marginTop: "24px" }}>
                            <Col span={24}>
                                <h3 style={{ marginTop: "10px" }}>Hoá đơn</h3>
                            </Col>
                        </Row>
                        <Divider />
                        <Table columns={columns} dataSource={hoadons} />
                        <Row className="mb-24" style={{ marginTop: "24px" }}>
                            <Col span={24}>
                                <h3 style={{ marginTop: "10px" }}>Biên lai</h3>
                            </Col>
                        </Row>
                        <Divider />
                        <Table columns={_columns} dataSource={bienlais} />
                    </Card>
                </Col>
            </Row>
            <Drawer
                title={element?.type != 2 ? "Chi tiết hoá đơn" : "Chi tiết biên lai"}
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
            >
                <Row gutter={[24, 12]}>
                    <Col xs={24} md={24}>
                        <Card>
                            {element?.type != 2 ? "Mã hoá đơn:" : "Mã biên lai"}
                            <br /> {element?.id}
                        </Card>
                    </Col>
                    <Col xs={24} md={24}>
                        <Card>
                            Số tiền cần thanh toán: {VND.format(element?.total)}
                        </Card>
                    </Col>
                    <Col xs={24} md={24}>
                        <Card>
                            Nội dung chuyển tiền:
                            <br /> {element?.comment.slice(0, 30)}
                        </Card>
                    </Col>
                    <Col xs={24} md={24}>
                        <Button
                            ref={ref2}
                            block
                            onClick={() => {
                                onClick();
                            }}
                        >
                            Copy
                        </Button>
                    </Col>
                    <Col xs={24} md={24}>
                        <Button
                            type="primary"
                            block
                            onClick={() => setOpenHD(true)}
                        >
                            Hướng dẫn thanh toán
                        </Button>
                    </Col>
                </Row>
            </Drawer>
            <Tour
                open={openHD}
                onClose={() => setOpenHD(false)}
                steps={steps}
            />
        </>
    );
};

export default Billing;
