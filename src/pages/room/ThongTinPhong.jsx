import { Row, Col } from "antd";
import CardInfo from "./components/CardInfo";
import DanhSachSinhVien from "./components/DanhSachSinhVien";
const ThongTinPhong = () => {
    return (
        <>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <CardInfo />
                </Col>
                <Col xs={24} md={16}>
                    <DanhSachSinhVien />
                </Col>
            </Row>
        </>
    );
};

export default ThongTinPhong;
