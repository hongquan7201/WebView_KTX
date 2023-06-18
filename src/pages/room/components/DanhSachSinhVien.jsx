import { Card, Table, Divider } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { GetAllSinhVienInRoom } from "../../../services/RoomService";
const columns = [
    {
        title: "Họ và tên",
        dataIndex: "name",
    },
    {
        title: "Địa chỉ",
        dataIndex: "address",
    },
    {
        title: "Số điện thoại",
        dataIndex: "sdt",
    },
];

const DanhSachSinhVien = () => {
    const { user, token } = useContext(UserContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const handle = async () => {
            const result = await GetAllSinhVienInRoom(user.id, token);
            if (result.status === 200) {
                setData(result.data);
            } else {
                console.log(result.message);
            }
        };
        handle();
    }, []);
    return (
        <Card style={{ minHeight: "500px" }}>
            <Divider orientation="center">
                <div className="title">Danh sách sinh viên</div>
            </Divider>
            <Table columns={columns} dataSource={data} />
        </Card>
    );
};
export default DanhSachSinhVien;
