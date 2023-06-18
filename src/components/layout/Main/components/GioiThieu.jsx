import {
    Col,
    Row,
    Timeline,
    Image,
} from "antd";
import LogoQTHT from "../../../../assets/images/logoQTHT.jpg";
import LogoService from "../../../../assets/images/logoService.png";
import LogoHoatDong from "../../../../assets/images/logoHoatDong.jpg";
const GioiThieu = () => {
    return (
        <>
            {/* Quá trình hình thành */}
            <div className="titleMain">QUÁ TRÌNH HÌNH THÀNH</div>
            <Row gutter={24}>
                <Col span={12}>
                    <Timeline
                        items={[
                            {
                                children:
                                    "Thực hiện Nghị quyết số 18/NQ-CP, Quyết định số 65/2009/QĐ-TTg của Chính phủ về phát triển nhà ở cho học sinh sinh viên các trường đại học, cao đẳng, trung cấp chuyên nghiệp và dạy nghề.",
                            },
                            {
                                children:
                                    "Quyết định số 4874/QĐ-UBND ngày 29/06/2009 của UBNDTP Đà Nẵng V/v phê duyệt dự án đầu tư Ký túc xá tập trung phục vụ cho học sinh sinh viên các trường đại học, cao đẳng, trung cấp chuyên nghiệp và dạy nghề trên địa bàn TP. Đà Nẵng.",
                            },
                            {
                                children:
                                    "Công trình Ký túc xá được UBND TP. Đà Nẵng làm chủ đầu tư, giao cho Liên danh Công ty cổ phần Đức Mạnh và Công ty cổ phần đầu tư & xây dựng 579 thi công xây dựng.",
                            },
                            {
                                children:
                                    "Đưa vào khai thác kể từ tháng 8 năm 2012 ở khu Ký túc xá phía Tây và tháng 8 năm 2013 ở khu Ký túc xá phía Đông.",
                            },
                            {
                                children:
                                    "Đến ngày 7/9/2018 UBND thành phố Đà Nẵng ký Quyết định số 3918/QĐ-UBND về việc thành lập Trung tâm Quản lý và Khai thác nhà Đà Nẵng trực thuộc Sở Xây dựng trên cơ sở hợp nhất Công ty Quản lý nhà Đà Nẵng và Công ty Quản lý nhà chung cư thành phố Đà Nẵng trực thuộc Sở Xây dựng.",
                            },
                            {
                                children:
                                    "Ký túc xá thoáng mát, sạch sẽ, môi trường “xanh, sạch, đẹp” với tiêu chí: “CHUẨN MỰC – VĂN MINH – HIỆN ĐẠI”. Quản lý sinh viên bằng phần mềm tiên tiến, đặc biệt về an ninh trật tự trong ký túc xá được đảm bảo,  kiểm soát ra, vào có hệ thống camera hỗ trợ giám sát chặt chẽ, có đầy đủ các dịch vụ tiện ích nhằm tạo cho các bạn Sinh viên an tâm nghỉ ngơi, học tập, đáp ứng nhu cầu sinh hoạt, vui chơi, giải trí lành mạnh.",
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
                        src={LogoQTHT}
                        style={{ justifyItems: "center" }}
                    />
                </Col>
            </Row>
            {/* Dịch vụ tiện ích đa dạng */}
            <div className="titleMain">DỊCH VỤ TIỆN ÍCH ĐA DẠNG</div>
            <Row gutter={24}>
                <Col
                    span={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={LogoService}
                        style={{ justifyItems: "center" }}
                    />
                </Col>
                <Col span={12}>
                    <Timeline
                        items={[
                            {
                                children: "Nhà ăn, điểm tâm.",
                            },
                            {
                                children: "Siêu thị mini tiện lợi.",
                            },
                            {
                                children: "Đào tạo lái xe ôtô, môtô.",
                            },
                            {
                                children: "Dạy tiếng anh.",
                            },
                            {
                                children: "Dịch vụ giặt ủi.",
                            },
                            {
                                children: "Dịch vụ cắt tóc.",
                            },
                            {
                                children: "Dịch vụ photocopy.",
                            },
                            {
                                children: "Câu lạc bộ thể hình.",
                            },
                            {
                                children:
                                    "Hệ thống wifi phủ sóng khắp Ký túc xá.",
                            },
                            {
                                children:
                                    "Và còn rất nhiều dịch vụ tiện ích khác đi kèm đáp ứng nhu cầu ăn, ở, học tập và sinh hoạt của các bạn sinh viên….",
                            },
                        ]}
                    />
                </Col>
            </Row>
            {/* Các hoạt động phong trào thiện nguyện */}
            <div className="titleMain">
                CÁC HOẠT ĐỘNG PHONG TRÀO – THIỆN NGUYỆN
            </div>
            <Row gutter={24}>
                <Col span={12}>
                    <Timeline
                        items={[
                            {
                                children:
                                    "Nồi cháo tình thương: Định kỳ hằng tháng Ký túc xá đều có 04 nồi cháo dành cho các em nhỏ, những người có hoàn cảnh khó khăn.",
                            },
                            {
                                children:
                                    "Hiến máu nhân đạo: Hiện nay đã thành lập CLB ngân hàng máu nóng tại 02 khu Ký túc xá, hằng năm Ký túc xá đóng góp hàng trăm đơn vị máu cho Hội Chữ thập đỏ…",
                            },
                            {
                                children:
                                    "Phát sữa, quyên góp quần áo cũ cho các em tại Làng Hy Vọng, trẻ em bị chất độc màu da cam.",
                            },
                            {
                                children:
                                    "Tặng xe đạp cho các em HSSV có hoàn cảnh khó khăn.",
                            },
                            {
                                children:
                                    "Chương trình “Tết sum vầy”: Hỗ trợ vé xe cho các em ở xa có hoàn cảnh khó khăn.",
                            },
                            {
                                children:
                                    "Chương trình Ngày hội chào tân sinh viên.",
                            },
                            {
                                children:
                                    "Chương trình Hội thao Ký túc xá.",
                            },
                            {
                                children:
                                    "Chương trình Liên hoan ban nhóm nhạc.",
                            },
                            {
                                children: "Chương trình  Tiếp sức mùa thi.",
                            },
                            {
                                children:
                                    "Chương trình  Karaoke chào mừng ngày nhà giáo Việt Nam 20/11.",
                            },
                            {
                                children: "Chương trình Giờ trái đất,….",
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
                        src={LogoHoatDong}
                        style={{ justifyItems: "center" }}
                    />
                </Col>
            </Row>
        </>
    )
}
export default GioiThieu;