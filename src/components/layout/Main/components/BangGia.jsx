import {
    Col,
    Row,
    Table,
} from "antd";
const columns = [
    {
        title: "STT",
        dataIndex: "key",
    },
    {
        title: "Nội dung thu",
        dataIndex: "name",
    },
    {
        title: "Mức thu",
        dataIndex: "price",
    },
    {
        title: "Ghi chú",
        dataIndex: "ghichu",
    },
];
const data = [
    {
        key: "1",
        name: "Hồ sơ lưu trú",
        price: "10.000 đồng/bộ",
        ghichu: "",
    },
    {
        key: "2",
        name: "Thẻ nội trú",
        price: "40.000 đồng/cái",
        ghichu: "",
    },
    {
        key: "3",
        name: "Tiền cược tài sản",
        price: "100.000 đồng/người",
        ghichu: "Nộp khi làm thủ tục lưu trú",
    },
    {
        key: "4",
        name: "Phí đăng ký tạm trú",
        price: "10.000 đồng/lần",
        ghichu: "Nộp theo kỳ đóng phí lưu trú",
    },
    {
        key: "5",
        name: "Phí lưu trú đối với người thân",
        price: "20.000 đồng/ngày",
        ghichu: "Áp dụng đổi với bố, mẹ của sinh viên đến thăm ở lại KTX.",
    },
    {
        key: "6",
        name: "Phí đóng mở điện",
        price: "10.000 đồng/lần",
        ghichu: "Áp dụng đối với sinh viên nợ bị ngừng cung.",
    },
];
const BangGia = () => {
    return (
        <>
            <div className="titleMain">BẢNG GIÁ</div>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} />;
                </Col>
            </Row>
        </>
    )
}
export default BangGia;