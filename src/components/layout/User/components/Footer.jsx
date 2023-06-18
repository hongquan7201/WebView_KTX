import { Layout, Row, Col } from "antd";

function Footer() {
    const { Footer: AntFooter } = Layout;

    return (
        <AntFooter style={{ background: "#fafafa" }}>
            <Row className="just">
                <Col xs={24} md={24} lg={24}>
                    <div className="footer-menu">
                        <ul>
                            <li className="nav-item">
                                <a
                                    href="#pablo"
                                    className="nav-link text-muted"
                                    target="_blank"
                                >
                                    Liên hệ chúng tôi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#pablo"
                                    className="nav-link text-muted"
                                    target="_blank"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </AntFooter>
    );
}

export default Footer;
