import {
    Col,
    Row,
    Form,
    Button,
    Space,
    Input,
    Card,
} from "antd";
import TableData from "./TableData";
const { TextArea } = Input;
const LienHe = () => {
    return (
        <>
            <div className="titleMain">LIÊN HỆ</div>
            <Row gutter={24}>
                <Col span={10}>
                    <Card style={{ minHeight: "700px" }}>
                        <div
                            style={{
                                fontSize: "2em",
                                fontWeight: "500",
                                color: "#000",
                            }}
                        >
                            Form Liên Hệ
                        </div>
                        <p
                            style={{
                                color: "#000",
                                margin: "10px 0 50px 0",
                            }}
                        >
                            Hãy nhập form dưới đây để liên hệ với chúng tôi!
                        </p>
                        <Form layout="vertical">
                            <Form.Item
                                name="name"
                                label="Họ và tên"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Số điện thoại"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="content"
                                label="Nội dung liên hệ*"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        GỬI LIÊN HỆ
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={14}>
                    <Card style={{ minHeight: "700px" }}>
                        <div
                            style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "red",
                                textAlign: "center",
                            }}
                        >
                            TỔNG ĐÀI KÝ TÚC XÁ: 1900.055.559<br></br> DANH
                            BẠ TRUNG TÂM QUẢN LÝ KÝ TÚC XÁ ĐÀ NẴNG
                        </div>
                        <div
                            style={{
                                background: "#f8b433",
                                padding: "18px",
                            }}
                        >
                            Các số điện thoại khẩn cấp
                        </div>
                        <TableData />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default LienHe