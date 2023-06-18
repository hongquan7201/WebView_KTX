import {
    Card,
    Col,
    Row
} from "antd";
import Echart from "./components/EChart";
import { useContext, useEffect, useState } from "react";
import { GetThongKe } from "../../services/Payment";
import { UserContext } from "../../contexts/UserContext";
const Home = () => {
    const { token, user } = useContext(UserContext);
    const [listData, setListData] = useState([]);
    useEffect(() => {
        const handle = async () => {
            const result = await GetThongKe(user.id, token);
            const _data = [
                {
                    name: "Tiêu thụ",
                    data: result,
                    color: "#fff",
                },
            ];
            setListData(_data);
        }
        handle()
    }, []);
    return (
        <>
            <div className="layout-content">
                <Row gutter={[24, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
                        <Card bordered={false} className="criclebox h-full">
                            <Echart data={listData} />
                        </Card>
                    </Col>
                    {/* <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
                        <Card bordered={false} className="criclebox h-full">
                            <LineChart />
                        </Card>
                    </Col> */}
                </Row>
            </div>
        </>
    );
}

export default Home;
