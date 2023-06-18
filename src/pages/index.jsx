import { Card, Carousel } from "antd";
import Nav1 from "../assets/images/nav1.jpg";
import Nav2 from "../assets/images/nav2.jpg";
import Nav3 from "../assets/images/nav3.jpg";
const Index = () => {
    const contentStyle = {
        height: "360px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    return (
        <Card>
            <Carousel autoplay>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img style={contentStyle} src={Nav1} />
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img style={contentStyle} src={Nav2} />
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img style={contentStyle} src={Nav3} />
                    </div>
                </div>
            </Carousel>
        </Card>
    );
};
export default Index;
