import { Table } from "antd";
const columns = [
    {
        title: "STT",
        dataIndex: "key",
    },
    {
        title: "Tên đơn vị",
        dataIndex: "name",
    },
    {
        title: "Số nội bộ",
        dataIndex: "phone",
    },
    {
        title: "Khu",
        dataIndex: "khu",
    },
];
const data = [
    {
        key: "1",
        name: "Bảo vệ cổng chính",
        phone: 107,
        khu: "Khu A",
    },
    {
        key: "2",
        name: "Bảo vệ cổng phụ",
        phone: 108,
        khu: "Khu B",
    },
    {
        key: "3",
        name: "Công an phường",
        phone: "02743750872",
        khu: "Khu A",
    },
    {
        key: "4",
        name: "Trạm y tế",
        phone: 119,
        khu: "Khu A",
    },
];
const TableData = () => {
    return <Table columns={columns} dataSource={data} />;
};
export default TableData;
