import { Button, Result } from "antd";
const Page403 = () => (
    <Result
        status="403"
        title="403"
        subTitle="Xin lỗi, bạn không được phép truy cập trang này."
        extra={<Button type="primary">Quay lại trang chủ</Button>}
    />
);
export default Page403;
