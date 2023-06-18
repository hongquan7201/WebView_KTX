import {
    Col,
    Row,
    Timeline,
    Image,
    Card,
} from "antd";
import LogoGioiThieu from "../../../../assets/images/logoGioiThieu.jpg";

const DoiNet = () => {
    return (
        <Card style={{ marginRight: "120px" }}>
            <div className="titleMain">
                ĐÔI NÉT VỀ KÝ TÚC XÁ ĐÀ NẴNG
            </div>
            <Row gutter={24}>
                <Col span={12}>
                    <Timeline
                        items={[
                            {
                                children:
                                    "Là dự án đầu tiên được xây dựng có quy mô nhất Miền trung, do UBND TP. Đà Nẵng làm chủ đầu tư từ nguồn vốn trái phiếu của Chính phủ góp phần thực hiện chính sách an sinh xã hội, tạo nơi lưu trú văn minh, hiện đại dành cho sinh viên đang học tập tại các trường đại học, cao đẳng, trung cấp và dạy nghề trên địa bàn TP. Đà Nẵng.",
                            },
                            {
                                children:
                                    "Ký túc xá thoáng mát, sạch sẽ, môi trường “xanh, sạch, đẹp” với tiêu chí: “CHUẨN MỰC – VĂN MINH – HIỆN ĐẠI”.",
                            },
                            {
                                children:
                                    "Quản lý sinh viên bằng phần mềm tiên tiến, đặc biệt về an ninh trật tự trong Ký túc xá được đảm bảo,  kiểm soát ra, vào có hệ thống camera hỗ trợ giám sát chặt chẽ, có đầy đủ các dịch vụ tiện ích nhằm tạo cho các bạn sinh viên an tâm nghỉ ngơi, học tập, đáp ứng nhu cầu sinh hoạt, vui chơi, giải trí lành mạnh.",
                            },
                        ]}
                    />
                </Col>
                <Col
                    span={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={LogoGioiThieu}
                        style={{ justifyItems: "center" }}
                    />
                </Col>
            </Row>
        </Card>
    );
}
export default DoiNet;