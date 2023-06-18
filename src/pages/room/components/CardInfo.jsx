import { useContext, useEffect, useState } from "react";
import { Divider, Card, Row, Col } from "antd";
import { UserContext } from "../../../contexts/UserContext";
import { GetRoom } from "../../../services/RoomService";
const CardInfo = () => {
    const { user, token } = useContext(UserContext);
    const [room, setRoom] = useState();
    useEffect(() => {
        const handle = async () => {
            const result = await GetRoom(user.id, token);
            if (result.status === 200) {
                setRoom(result.data[0]);
            } else {
                console.log(result.message);
            }
        };
        handle();
    }, []);
    return (
        <Card style={{ minHeight: "500px" }}>
            <Divider orientation="center">
                <div className="title">Thông tin phòng</div>
            </Divider>
            <Row gutter={[24, 12]}>
                <Col span={24}>
                    <Card bordered="false">
                        Tên phòng: {room?.name ? "Phòng " + room.name : ""}
                    </Card>
                </Col>
                <Col span={24}>
                    <Card bordered="false">
                        Số lượng sinh viên ở:{" "}
                        {room?.quantityPeople ? room.quantityPeople : ""}
                    </Card>
                </Col>
                <Col span={24}>
                    <Card bordered="false">
                        Tên khu ở: {room?.tenkhu ? room.tenkhu : ""}
                    </Card>
                </Col>
            </Row>
        </Card>
    );
};
export default CardInfo;
