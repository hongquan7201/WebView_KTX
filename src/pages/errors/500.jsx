import { Button, Result } from "antd";
const Page500 = () => (
    <Result
        status="500"
        title="500"
        subTitle="Xin lỗi, có lỗi xảy ra."
        extra={<Button type="primary">Quay lại trang chủ</Button>}
    />
);
export default Page500;
